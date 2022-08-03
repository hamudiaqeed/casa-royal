import productsTypes from './products.types';

export const addProductStart = productData => ({
  type: productsTypes.ADD_NEW_PRODUCT_START,
  payload: productData
});

export const fetchProductsStart = (subcategory, collection, startAfterDoc, persistProducts=[]) => ({
  type: productsTypes.FETCH_PRODUCTS_START,
  payload: {subcategory, collection, startAfterDoc, persistProducts}
});

export const setProducts = products => ({
  type: productsTypes.SET_PRODUCTS,
  payload: products
});

export const deleteProductStart = (subcategory, collection, documentID) => ({
  type: productsTypes.DELETE_PRODUCT_START,
  payload: {subcategory, collection, documentID}
});

export const fetchProductStart = (subcategory, collection, productID) => ({
  type: productsTypes.FETCH_PRODUCT_START,
  payload: {subcategory, collection, productID}
});

export const setProduct = product => ({
  type: productsTypes.SET_PRODUCT,
  payload: product
});