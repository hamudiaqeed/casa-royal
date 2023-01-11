import React, { useState, useEffect, useRef } from 'react';
import FormInput from './../forms/formInput/forminput.component';
import Button from './../forms/button/button.component';
import { selectCartTotal, selectCartItemsCount, selectCartItems } from './../../redux/Cart/cart.selectors';
import { saveOrderHistory } from './../../redux/Orders/orders.actions';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './styles.scss';
import emailjs from "@emailjs/browser";

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
  const form = useRef();

  useEffect(() => {
    if (itemCount < 1) {
      history.push('/dashboard');
    }

  }, [itemCount]);

  const handleShipping = evt => {
    const { name, value } = evt;
    setShippingAddress({
      ...shippingAddress,
      [name]: value
    });
  };

  const handleFormSubmit = async evt => {
    evt.preventDefault();

    if (
      !shippingAddress.nume || !shippingAddress.localitate ||
      !shippingAddress.judet || !shippingAddress.adresa ||
      !shippingAddress.telefon
    ) {
      return;
    }

    const configOrder = {
      orderTotal: total,
      orderItems: cartItems.map(item => {
        const { documentID, productThumbnail, productName,
        productPrice, quantity } = item;

        return {
          documentID,
          productThumbnail,
          productName,
          productPrice,
          quantity
        };
      }),
      orderStatus: 'Plasata',
      orderInfo: [
        {
          nume: shippingAddress.nume,
          telefon: shippingAddress.telefon,
          adresa: shippingAddress.adresa,
          localitate: shippingAddress.localitate,
          judet: shippingAddress.judet
        }
      ]
    }

    emailjs.sendForm('WebMaster', 'template_es1x0v9', form.current, process.env.REACT_APP_EMAILJS_KEY)
        .then((result) => {
            // console.log(result.text);
        }, (error) => {
            // console.log(error.text);
        });

    dispatch(
      saveOrderHistory(configOrder)
    );

  };

  return (
    <div className="paymentDetails">
      <form onSubmit={handleFormSubmit} ref={form}>
        <div className="group">
          <h2>
            Detalii comanda
          </h2>
          <FormInput
            required
            placeholder="Nume"
            name="nume"
            handleChange={evt => handleShipping(evt.target)}
            value={shippingAddress.nume}
            type="text"
          />

          <FormInput
            required
            placeholder="Adresa"
            name="adresa"
            handleChange={evt => handleShipping(evt.target)}
            value={shippingAddress.adresa}
            type="text"
          />

          <FormInput
            required
            placeholder="Localitate"
            name="localitate"
            handleChange={evt => handleShipping(evt.target)}
            value={shippingAddress.localitate}
            type="text"
          />

          <FormInput
            required
            placeholder="Judet"
            name="judet"
            handleChange={evt => handleShipping(evt.target)}
            value={shippingAddress.judet}
            type="text"
          />

          <FormInput
            required
            placeholder="Telefon"
            name="telefon"
            handleChange={evt => handleShipping(evt.target)}
            value={shippingAddress.telefon}
            type="text"
          />
          <div className='cartItemsContainer'>
          {cartItems.map((item, pos) => {
            return (
              <div className='cartItemsPayment'>
                <div>
                  <h3>Nume produs: {item.productName}</h3>
                  <img src={item.productThumbnail} alt={item.productName} />
                  <p>Cantitate: {item.quantity}</p>
                  <p>Pret/bucata: {item.productPrice} RON</p>
                </div>
                <FormInput 
                  type="text"
                  name="productName"
                  value={item.productName}
                />
                <FormInput 
                  type="text"
                  name="quantity"
                  value={item.quantity}
                />
                <FormInput 
                  type="text"
                  name="productPrice"
                  value={item.productPrice}
                />
                <FormInput 
                  type="text"
                  name="total"
                  value={total}
                />
              </div>
            )
          })}
          </div>
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