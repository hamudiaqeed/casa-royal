import React, { useState, useEffect } from 'react';
import './orderDetails.styles.scss';
import {
  TableContainer, Table, TableHead,
  TableBody, TableRow, TableCell
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setOrderDetails, setOrderStatus, getOrderDetailsStart } from './../../redux/Orders/orders.actions';
import { checkUserIsAdmin } from '../../utils/index';
import { useSelector } from "react-redux/es/exports";
import FormSelect from '../forms/FormSelect/index';

const mapState = ({user}) => ({
  currentUser: user.currentUser
}) 

const columns = [
  {
    id: 'productThumbnail',
    label: ''
  },
  {
    id: 'productName',
    label: 'Nume'
  },
  {
    id: 'productPrice',
    label: 'Pret'
  },
  {
    id: 'quantity',
    label: 'Cantitate'
  }
]

const columnsInfo = [
  {
    id: 'adresa',
    label: 'Adresa'
  },
  {
    id: 'judet',
    label: 'Judet'
  },
  {
    id: 'localitate',
    label: 'Localitate'
  },
  {
    id: 'nume',
    label: 'Nume'
  },
  {
    id: 'telefon',
    label: 'Telefon'
  }
]

const styles = {
  fontSize: '16px',
  width: '10%'
};

const formatText = (columnName, columnValue) => {
  switch(columnName) {
    case 'productPrice':
      return `${columnValue} lei`;
    case 'productThumbnail':
      return <img src={columnValue} width={250} />;
    default:
      return columnValue;
  }
}

const OrderDetails = ({ order, orderID }) => {
  const dispatch = useDispatch();
  const orderItems = order && order.orderItems;
  const orderInfo = order && order.orderInfo;
  const orderStatus = order && order.orderStatus;
  const {currentUser} = useSelector(mapState);

  const isAdmin = checkUserIsAdmin(currentUser);

  useEffect(() => {
    return () => {
      dispatch(
        setOrderDetails({})
      );
    }
  }, []);
  
  return (
    <TableContainer className='tableContainer'>
      <Table>

        <TableHead>
          <TableRow>

            {columns.map((col, pos) => {
              return (
                <TableCell
                  key={pos}
                  style={styles}
                >
                  {col.label}
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>

        <TableBody>

          {(Array.isArray(orderItems) && orderItems.length > 0) && orderItems.map((row, pos) => {
            return (
              <TableRow key={pos}>

                {columns.map((col, pos) => {
                  const columnName = col.id;
                  const columnValue = row[columnName];

                  return (
                    <TableCell
                      key={pos}
                      style={styles}
                    >
                      {formatText(columnName, columnValue)}
                    </TableCell>
                  )
                })}

              </TableRow>
            )
          })}
        </TableBody>
      </Table>

      <Table>
        <TableHead>
            <TableRow>
            {columnsInfo.map((col, pos) => {
              return (
                <TableCell
                  key={pos}
                  style={styles}
                >
                  {col.label}
                </TableCell>
              )
            })}

          </TableRow>
        </TableHead>

        <TableBody>
          {(Array.isArray(orderInfo) && orderInfo.length > 0) && orderInfo.map((row, pos) => {
            return (
              <TableRow key={pos}>

                {columnsInfo.map((col, pos) => {
                  const columnName = col.id;
                  const columnValue = row[columnName];

                  return (
                    <TableCell
                      key={pos}
                      style={styles}
                    >
                      {formatText(columnName, columnValue)}
                    </TableCell>
                  )
                })}

              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      {
        isAdmin ? (
          <>
            <h3>Status actual: {order.orderStatus}</h3>
            <FormSelect
              label="Schimba Status Comanda"
              options={[{
                value: "plasata",
                name: "Plasata"
              }, {
                value: "procesare",
                name: "Procesare"
              }, {
                value: "finalizata",
                name: "Finalizata"
              }]}
              onChange={e => {dispatch(
                setOrderStatus(orderID, e.target.value)
              );
              dispatch(
                getOrderDetailsStart(orderID)
              );}}
            />
          </>
        ) : (
          <h3>Status: <span className={orderStatus}>{orderStatus}</span></h3>
        )
      }
    </TableContainer>
  )
}

export default OrderDetails;