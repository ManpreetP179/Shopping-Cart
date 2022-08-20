import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseConfig1 } from './secret/secret.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const app = initializeApp(firebaseConfig1)
const db = getFirestore(app);
const auth = getAuth();

const collections = {
    PRODUCTS: "products",
    ORDERS: "orders",
}

export { app, db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, collection, addDoc, collections };

