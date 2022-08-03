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
  // const { filterType } = useParams();
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

      // if (filterType) ref = ref.where('productCategory', '==', filterType);  
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
          console.log(subs)
          setSub(subs);
        })
        .catch(err => {
          reject(err);
        })
    })
  }

  // const handleFilter = (e) => {
  //   const nextFilter = e.target.value;
  //   history.push(`/search/${nextFilter}`);
  // };

  // if (!Array.isArray(data)) return null;
  // if (data.length < 1) {
  //   return (
  //     <div className="products">
  //       <p>
  //         Niciun rezultat.
  //       </p>
  //     </div>
  //   );
  // }

  // const configFilters = {
  //   defaultValue: filterType,
  //   options: [{
  //     name: 'Show all',
  //     value: ''
  //   }, {
  //     value: "tapet",
  //     name: "Tapet"
  //   }, {
  //     value: "profile",
  //     name: "Profile Decorative"
  //   }, {
  //     value: "mocheta",
  //     name: "Mocheta"
  //   }, {
  //     value: "vopsea",
  //     name: "Vopsea Decorativa"
  //   }, {
  //     value: "decoratiuni",
  //     name: "Decoratiuni"
  //   }],
  //   handleChange: handleFilter
  // };

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