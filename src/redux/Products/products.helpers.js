import { firestore } from './../../firebase/utils';

export const handleAddProduct = (product) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('products')
      .doc(product.productCategory)
      .collection(product.productSubcategory)
      .doc()
      .set(product)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      })
  });
}

export const handleFetchProducts = ({ subcategory, collection, startAfterDoc, persistProducts=[] }) => {
  return new Promise((resolve, reject) => {
    const pageSize = 9;

    let ref = firestore.collection('products').doc(subcategory).collection(collection).orderBy('createdDate').limit(pageSize);

    // if (filterType) ref = ref.where('productCategory', '==', filterType);
    if (startAfterDoc) ref = ref.startAfter(startAfterDoc);

    ref
      .get()
      .then(snapshot => {
        const totalCount = snapshot.size;

        const data = [
          ...persistProducts,
          ...snapshot.docs.map(doc => {
            return {
              ...doc.data(),
              documentID: doc.id
            }
          })
        ];

        resolve({
          data,
          queryDoc: snapshot.docs[totalCount - 1],
          isLastPage: totalCount < 1
        });
      })
      .catch(err => {
        reject(err);
      })
  })
}

export const handleDeleteProduct = ({ subcategory, collection, documentID }) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('products')
      .doc(subcategory)
      .collection(collection)
      .doc(documentID)
      .delete()
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      })
  });
}

export const handleFetchProduct = (info) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('products')
      .doc(info.subcategory)
      .collection(info.collection)
      .doc(info.productID)
      .get()
      .then(snapshot => {

        if (snapshot.exists) {
          resolve({
            ...snapshot.data(),
            documentID: info.productID
          });
        }
      })
      .catch(err => {
        reject(err);
      })
  })
}