import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductStart, setProduct } from './../../redux/Products/products.actions';
import { addProduct } from './../../redux/Cart/cart.actions';
import Button from './../forms/button/button.component';
import './styles.scss';

const mapState = ({productsData}) => ({
  product: productsData.product
});

const ProductCard = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { product } = useSelector(mapState);

  let subcategory = history?.location?.pathname?.split('/')[2];
  let collection = history?.location?.pathname?.split('/')[3];
  let productID = history?.location?.pathname?.split('/')[4];

  const {
    productThumbnail,
    productName,
    productPrice,
    productDesc
  } = product;

  useEffect(() => {
    dispatch(
      fetchProductStart(subcategory, collection, productID)
    )

    return () => {
      dispatch(
        setProduct({})
      )
    }

  }, []);

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(
      addProduct(product)
    );
    history.push('/cart');
  }

  const configAddToCartBtn = {
    type: 'button'
  }

  return (
    <div className="productCard">
      <div className="hero">
        <img src={productThumbnail} />
      </div>
      <div className="productDetails">
        <ul>
          <li>
            <h1>
              {productName}
            </h1>
          </li>
          <li>
            <span>
              {productPrice} RON
            </span>
          </li>
          <li>
            <div className="addToCart">
              <Button {...configAddToCartBtn} onClick={() => handleAddToCart(product)}>
                Adauga in cos
              </Button>
            </div>
          </li>
          <li>
            <span
              className="desc"
              dangerouslySetInnerHTML={{ __html: productDesc }} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductCard;