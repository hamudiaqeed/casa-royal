import React, { useEffect } from 'react';
import {
  TableContainer, Table, TableHead,
  TableBody, TableRow, TableCell
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setOrderDetails } from './../../redux/Orders/orders.actions';

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

const OrderDetails = ({ order }) => {
  const dispatch = useDispatch();
  const orderItems = order && order.orderItems;
  const orderInfo = order && order.orderInfo;

  useEffect(() => {
    return () => {
      dispatch(
        setOrderDetails({})
      );
    }
  }, []);

  return (
    <TableContainer>
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
    </TableContainer>
  )
}

export default OrderDetails;