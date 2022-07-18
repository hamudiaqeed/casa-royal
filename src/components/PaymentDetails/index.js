import React, { useState, useEffect } from 'react';
import FormInput from './../forms/FormInput/forminput.component';
import Button from './../forms/Button/button.component';
import { apiInstance } from './../../utils';
import { selectCartTotal, selectCartItemsCount, selectCartItems } from './../../redux/Cart/cart.selectors';
import { saveOrderHistory } from './../../redux/Orders/orders.actions';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import Item from '../Checkout/Item';
import { useHistory } from 'react-router-dom';
import './styles.scss';

const initialAddressState = {
  nume: '',
  adresa: '',
  localitate: '',
  judet: '',
  telefon: '',
};

const mapState = createStructuredSelector({
  total: selectCartTotal,
  itemCount: selectCartItemsCount,
  cartItems: selectCartItems,
});

const PaymentDetails = () => {
  const history = useHistory();
  const { total, itemCount, cartItems } = useSelector(mapState);
  const dispatch = useDispatch();
  const [shippingAddress, setShippingAddress] = useState({ ...initialAddressState });
  const [recipientName, setRecipientName] = useState('');

  useEffect(() => {
    if (itemCount < 1) {
      history.push('/dashboard');
    }

  }, [itemCount]);

  const handleShipping = evt => {
    const { name, value } = evt.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: value
    });
  };

  // const handleFormSubmit = async evt => {
  //   evt.preventDefault();
  //   const cardElement = elements.getElement('card');

  //   if (
  //     !shippingAddress.line1 || !shippingAddress.city ||
  //     !shippingAddress.state || !shippingAddress.postal_code ||
  //     !shippingAddress.country || !billingAddress.line1 ||
  //     !billingAddress.city || !billingAddress.state ||
  //     !billingAddress.postal_code || !billingAddress.country ||
  //     !recipientName || !nameOnCard
  //   ) {
  //     return;
  //   }

  //   apiInstance.post('/payments/create', {
  //     amount: total * 100,
  //     shipping: {
  //       name: recipientName,
  //       address: {
  //         ...shippingAddress
  //       }
  //     }
  //   }).then(({ data: clientSecret }) => {

  //     stripe.createPaymentMethod({
  //       type: 'card',
  //       card: cardElement,
  //       billing_details: {
  //         name: nameOnCard,
  //         address: {
  //           ...billingAddress
  //         }
  //       }
  //     }).then(({ paymentMethod }) => {

  //       stripe.confirmCardPayment(clientSecret, {
  //         payment_method: paymentMethod.id
  //       })
  //       .then(({ paymentIntent }) => {

  //         const configOrder = {
  //           orderTotal: total,
  //           orderItems: cartItems.map(item => {
  //             const { documentID, productThumbnail, productName,
  //               productPrice, quantity } = item;

  //             return {
  //               documentID,
  //               productThumbnail,
  //               productName,
  //               productPrice,
  //               quantity
  //             };
  //           })
  //         }

  //         dispatch(
  //           saveOrderHistory(configOrder)
  //         );
  //       });

  //     })


  //   });

  // };

  return (
    <div className="paymentDetails">
      <form>
        <div className="group">
          <h2>
            Detalii comanda
          </h2>
          <FormInput
            required
            placeholder="Nume"
            name="nume"
            handleChange={evt => setRecipientName(evt.target.value)}
            value={recipientName}
            type="text"
          />

          <FormInput
            required
            placeholder="Adresa"
            name="adresa"
            handleChange={evt => handleShipping(evt)}
            value={shippingAddress.adresa}
            type="text"
          />

          <FormInput
            required
            placeholder="Localitate"
            name="localitate"
            handleChange={evt => handleShipping(evt)}
            value={shippingAddress.localitate}
            type="text"
          />

          <FormInput
            required
            placeholder="Judet"
            name="judet"
            handleChange={evt => handleShipping(evt)}
            value={shippingAddress.judet}
            type="text"
          />

          <FormInput
            required
            placeholder="Telefon"
            name="telefon"
            handleChange={evt => handleShipping(evt)}
            value={shippingAddress.telefon}
            type="text"
          />
          {cartItems.map((item, pos) => {
            return (
              <div>
                <h3>{item.productName}</h3>
                <p>{item.quantity}</p>
                <p>{item.productPrice} RON</p>
                
              </div>
            )
          })}
          <h3>Total: {total} RON</h3>
        </div>
        <Button
          type="submit"
        >
          Trimite comanda
        </Button>

      </form>
    </div>
  );
}

export default PaymentDetails;