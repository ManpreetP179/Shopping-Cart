import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc,getDoc, getDocs } from 'firebase/firestore';
import { firebaseConfig1 } from './secret/secret.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
const app1 = initializeAuth(firebaseConfig1)
const app = initializeApp(firebaseConfig1)
const auth = getAuth(app1);
onAuthStateChanged(auth, user => { console.log(user); });
const db = getFirestore(app);


const collections = {
    PRODUCTS: "products",
    ORDERS: "orders",
}
//console.log(getDocs(collection(db, collections.PRODUCTS)))

export { app, db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, collection, addDoc, collections };

