import { firebaseConfig } from './config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });

export const handleUserProfile = async({userAuth, additionalData}) => {
    if(!userAuth) return;
    const {uid} = userAuth;

    const userRef = firestore.doc(`users/${uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const {displayName, email} = userAuth;
        const timestamp = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createDate: timestamp,
                ...additionalData
            });
        } catch(err) {
            console.log(err);
        }
    }
    return userRef;
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    })
};