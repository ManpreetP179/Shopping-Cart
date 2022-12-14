import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc,getDoc, getDocs } from 'firebase/firestore';
import { firebaseConfig1 } from './secret/secret.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { getStorage } from "firebase/storage";
const app = initializeApp(firebaseConfig1)
const auth = getAuth();
onAuthStateChanged(auth, user => { console.log(user); });
const db = getFirestore(app);
const storage = getStorage(app);
const collections = {
    PRODUCTS: "products",
    ORDERS: "orders",
}




export { app, db, auth, collections, storage };

