import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { fetchProductsStart } from './../../redux/Products/products.actions';
import Product from './Product';
import LoadMore from './../LoadMore';
import './styles.scss';
import { firestore } from '../../firebase/utils';

const mapState = ({ productsData }) => ({
  products: productsData.products
});

const ProductResults = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { products } = useSelector(mapState);
  const [sub, setSub] = useState();

  const { data, queryDoc, isLastPage } = products;

  let subcategory = history?.location?.pathname?.split('/')[2];
  let collection = history?.location?.pathname?.split('/')[3];

  useEffect(() => {
    dispatch(
      fetchProductsStart(subcategory, collection)
    )
  }, [subcategory, collection]);

  useEffect(() => {
    handleFetchSubcategories(subcategory)
  }, [subcategory])

  const handleFetchSubcategories = (subcategory) => {
    return new Promise((resolve, reject) => {
  
      let ref = firestore.collectionGroup('products')

      ref
        .get()
        .then(snapshot => {  
          const data = [
            ...snapshot.docs.map(doc => {
              return {
                ...doc.data(),
                documentID: doc.id
              }
            })
          ];
  
          resolve({data});
          const subs = data.filter(d => d.documentID == subcategory)[0].tip
          setSub(subs);
        })
        .catch(err => {
          reject(err);
        })
    })
  }

  const handleLoadMore = () => {
    let startAfterDoc = queryDoc;
    let persistProducts = data;
    dispatch(
      fetchProductsStart(
        subcategory,
        collection,
        startAfterDoc,
        persistProducts
      )
    )
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  return (
    <div className="products">
      <h1>
        {subcategory}
      </h1>

      

      <div className="productResults">
        {collection && data?.map((product, pos) => {
          const { productThumbnail, productName, productPrice } = product;
          if (!productThumbnail || !productName ||
            typeof productPrice === 'undefined') return null;

          const configProduct = {
            ...product
          };

          return (
            <Product key={pos} {...configProduct} />
          );
        })}
        {
          sub && !collection && sub.map((el) => {
            return (
              <div className='subcategorie'>
                <Link to={`/search/${subcategory}/${el.tip}`}>
                  <img src={el.imagine} />
                  <p>{el.tip}</p>
                </Link>
              </div>
            )
          })
        }
      </div>

      {!isLastPage && collection && (
        <LoadMore {...configLoadMore} />
      )}

    </div>
  );
};

export default ProductResults;