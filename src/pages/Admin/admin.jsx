import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductStart, fetchProductsStart, deleteProductStart } from './../../redux/Products/products.actions';
import Modal from './../../components/Modal';
import FormInput from './../../components/forms/formInput/forminput.component';
import FormSelect from './../../components/forms/FormSelect';
import Button from './../../components/forms/button/button.component';
import LoadMore from './../../components/LoadMore';
import {CKEditor} from 'ckeditor4-react';
import './admin.styles.scss';
import OrderHistory from '../../components/OrderHistory';
import { getUserOrderHistory } from './../../redux/Orders/orders.actions';
import { firestore } from '../../firebase/utils';
import firebase from 'firebase/compat/app';

const mapState = ({ productsData, user, ordersData }) => ({
  products: productsData.products,
  currentUser: user.currentUser,
  orderHistory: ordersData.orderHistory.data
});

const Admin = props => {
  const { products, currentUser, orderHistory } = useSelector(mapState);
  const dispatch = useDispatch();
  const [hideModal, setHideModal] = useState(true);
  const [productCategory, setProductCategory] = useState('');
  const [productSubcategory, setProductSubcategory] = useState('');
  const [productName, setProductName] = useState('');
  const [productCode, setProductCode] = useState('');
  const [productThumbnail, setProductThumbnail] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productDesc, setProductDesc] = useState('');
  const [productCategoryFilter, setProductCategoryFilter] = useState('');
  const [productSubcategoryFilter, setproductSubcategoryFilter] = useState('');

  //filter

  const [categoryFilter, setCategoryFilter] = useState('');
  const [subcategoryFilter, setSubcategoryFilter] = useState('');

  const { data, queryDoc, isLastPage } = products;

  //new
  const [newSubcategory, setNewSubcategory] = useState('');
  const [productSubcategoryThumbnail ,setProductSubcategoryThumbnail] = useState('');

  const getCategory = () => {
    let ref = firestore.collectionGroup('products')
    ref
      .get()
      .then(snapshot => {

        const data = [
          ...snapshot.docs.map(doc => {
            return {
              ...doc.data(),
              documentID: {value: doc.id, name: doc.id}
            }
          })
        ];

        const items = data.map(el => el.documentID);

        setCategoryFilter(items)


      })
      .catch(err => {
        console.log(err);
      })
  }
  const getSubCategory = () => {
    let ref = firestore.collectionGroup('products');

    ref
      .get("tip")
      .then(snapshot => {

        const data = [
          ...snapshot.docs.map(doc => {
            return {
              ...doc.data()
            }
          })
        ];

        const items = data.map(d => d.tip);

        let subcateg = [];

        for (var i = 0; i < items.length; i++) {
          for (var j = 0; j < items[i].length; j++) {
              subcateg.push(items[i][j])
          }
        }
        let subcategories = subcateg.map(sub => {
          return {
            value: sub.tip,
            name: sub.tip
          }
        })
        setSubcategoryFilter(subcategories)
      })
      .catch(err => {
        console.log(err);
      })
  }


  useEffect(() => {
    dispatch(
      fetchProductsStart(productCategoryFilter, productSubcategoryFilter)
    );
  }, [productCategoryFilter, productSubcategoryFilter]);

  useEffect(() => {
    dispatch(
      getUserOrderHistory(currentUser.id, currentUser.userRoles[1])
    );
    getCategory();
    getSubCategory();
  }, []);

  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal
  };

  const resetForm = () => {
    setHideModal(true);
    setProductCategory('tapet');
    setProductSubcategory('interior');
    setProductName('');
    setProductCode('');
    setProductThumbnail('');
    setProductPrice(0);
    setProductDesc('');
  };

  const handleAddSubcategory = () => {
    setSubcategoryFilter([...subcategoryFilter, {["name"]: newSubcategory, ["value"]: newSubcategory}]);
  }

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      addProductStart({
        productCategory,
        productSubcategory,
        productName,
        productCode,
        productThumbnail,
        productPrice,
        productDesc,
      })
    );

    if(productSubcategoryThumbnail && newSubcategory) {
      firestore
      .collection('products')
      .doc(productCategory)
      .update({ tip: firebase.firestore.FieldValue.arrayUnion({
        "imagine": productSubcategoryThumbnail,
        "tip": newSubcategory
      })})
      .then(() => {
        // console.log('ssuc')
      })
      .catch(err => {
        console.log(err);
      })
    }

    setNewSubcategory('');
    setProductSubcategoryThumbnail('');
    resetForm();

  };

  const handleLoadMore = () => {
    let startAfterDoc = queryDoc;
    let persistProducts = data;
    let subcategory = productCategoryFilter;
    let collection = productSubcategoryFilter;
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
    <div className="admin">
      <div>
        <OrderHistory orders={orderHistory} />
      </div>
      <div className="callToActions">
        <ul>
          <li>
            <Button onClick={toggleModal}>
              Adauga produs
            </Button>
          </li>
        </ul>
      </div>
      <FormSelect
        label="Categorie"
        options={categoryFilter}
        onChange={e => setProductCategoryFilter(e.target.value)}
      />
      <FormSelect
        label="Subcategorie"
        options={subcategoryFilter}
        onChange={e => setproductSubcategoryFilter(e.target.value)}
      />

      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form onSubmit={handleSubmit}>
            <h2>Adauga produs</h2>
            <FormSelect
              label="Categorie"
              options={categoryFilter}
              handleChange={e => setProductCategory(e.target.value)}
            />
            <div className='selectContainer'>
              <FormSelect
                label="Subcategorie"
                options={subcategoryFilter}
                handleChange={e => setProductSubcategory(e.target.value)}
              />
              <input 
                type="text" 
                placeholder='Adauga alta subcategorie' 
                value={newSubcategory}
                onChange={(e) => setNewSubcategory(e.target.value)}
              />
              <button onClick={handleAddSubcategory}>Adauga Subcategorie</button>
            </div>

            <FormInput
              label="URL Imagine Subcategorie"
              type="url"
              value={productSubcategoryThumbnail}
              handleChange={e => setProductSubcategoryThumbnail(e.target.value)}
            />

            <FormInput
              label="Nume"
              type="text"
              value={productName}
              handleChange={e => setProductName(e.target.value)}
            />

            <FormInput
              label="Cod Produs"
              type="text"
              value={productCode}
              handleChange={e => setProductCode(e.target.value)}
            />

            <FormInput
              label="URL Imagine"
              type="url"
              value={productThumbnail}
              handleChange={e => setProductThumbnail(e.target.value)}
            />

            <FormInput
              label="Pret"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productPrice}
              handleChange={e => setProductPrice(e.target.value)}
            />

            <CKEditor 
              onChange={e => setProductDesc(e.editor.getData())}
            />

            <br />

            <Button type="submit">
              Adauga produs
            </Button>

          </form>
        </div>
      </Modal>
      <div className="manageProducts">
        <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <th>
                <h1>
                  Manage Products
                </h1>
              </th>
            </tr>
            <tr>
              <td>
                <table className="results" border="0" cellPadding="10" cellSpacing="0">
                  <tbody>
                    {(Array.isArray(data) && data.length > 0) && data.map((product, index) => {
                      const {
                        productName,
                        productThumbnail,
                        productPrice,
                        documentID
                      } = product;

                      return (
                        <tr key={index}>
                          <td>
                            <img className="thumb" src={productThumbnail} />
                          </td>
                          <td>
                            {productName}
                          </td>
                          <td>
                            {productPrice} RON
                          </td>
                          <td>
                            <Button onClick={() => dispatch(deleteProductStart(productCategoryFilter, productSubcategoryFilter, documentID))}>
                              Sterge
                            </Button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>

              </td>
            </tr>
            <tr>
              <td>
                <table border="0" cellPadding="10" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>
                        {!isLastPage && (
                          <LoadMore {...configLoadMore} />
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default Admin;