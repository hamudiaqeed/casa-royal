import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from './../../redux/Cart/cart.selectors';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './styles.scss';
import Button from './../forms/button/button.component';
import Item from './Item';

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

const Checkout = ({ }) => {
  const history = useHistory();
  const { cartItems, total } = useSelector(mapState);

  const errMsg = 'Cosul tau este gol.';

  return (
    <div className="checkout">
      {
        cartItems.length > 0 && <h1>Checkout</h1>
      }

      <div className="cart">
        {cartItems.length > 0 ? (
          <table border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td>
                  <table className="checkoutHeader" border="0" cellPadding="10" cellSpacing="0">
                    <tbody>
                      <tr className='table-header'>
                        <th>
                          Produs
                        </th>
                        <th>
                          Denumire
                        </th>
                        <th>
                          Cantitate
                        </th>
                        <th>
                          Pret
                        </th>
                        <th>
                          Sterge
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table border="0" cellSpacing="0" cellPadding="0">
                    <tbody>
                      {cartItems.map((item, pos) => {
                        return (
                          <tr key={pos}>
                            <td>
                              <Item {...item} />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table border="0" cellSpacing="0" cellPadding="0">
                    <tbody>
                      <tr>
                        <td>
                          <table border="0" cellPadding="10" cellSpacing="0">
                            <tbody>
                              <tr>
                                <td>
                                <h3 style={{textAlign: 'end'}}>
                                  Total: {total} RON
                                </h3>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table border="0" cellPadding="10" cellSpacing="0">
                            <tbody>
                              <tr className='buttons-cart'>
                                <td>
                                  <Button onClick={() => history.goBack()}>
                                    Continua cumparaturile
                                  </Button>
                                </td>
                                <td>
                                  <Button onClick={() => history.push('/payment')}>
                                    Checkout
                                  </Button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
            <div className='no-prod'>
              <p>
                {errMsg}
              </p>
              <Link to='/search'>Cauta produse</Link>
            </div>
          )}
      </div>
    </div>
  );
};

export default Checkout;