import { firestore } from './../../firebase/utils';

export const handleSaveOrder = order => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('orders')
      .doc()
      .set(order)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const handleOrderStatus = ({orderID, status}) => {
  return new Promise((resolve, reject) => {
  firestore
    .collection('orders')
    .doc(orderID)
    .update({orderStatus: status})
    .then(() => {
      resolve();
    })
    .catch(err => {
      reject(err);
    });
  });
};

export const handleGetUserOrderHistory = ({uid, role}) => {
  return new Promise((resolve, reject) => {
    let ref;
    if(role === 'admin') {
      ref = firestore.collectionGroup('orders');
      
    } else {
      ref = firestore.collection('orders').orderBy('orderCreatedDate');
      ref = ref.where('orderUserID', '==', uid);
    }
    ref
      .get()
      .then(snap => {
        const data = [
          ...snap.docs.map(doc => {
            return {
              ...doc.data(),
              documentID: doc.id
            }
          })
        ];

        resolve({ data });
      })
      .catch(err => {
        reject(err);
      });


  });
};

export const handleGetOrder = orderID => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('orders')
      .doc(orderID)
      .get()
      .then(snap => {
        if (snap.exists) {
          resolve({
            ...snap.data(),
            documentID: orderID
          })
        }
      })
      .catch(err => {
        reject(err);
      })
  })
}