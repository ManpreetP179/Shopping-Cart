import * as dotenv from 'dotenv';
dotenv.config();


const firebaseConfig = {
  apiKey: "AIzaSyDjK6r_UAt5RMfChKm-XrqQrRDpZ3WxDOQ",
  authDomain: "shopping-cart-15c11.firebaseapp.com",
  projectId: "shopping-cart-15c11",
  storageBucket: "shopping-cart-15c11.appspot.com",
  messagingSenderId: "14356686512",
  appId: "1:14356686512:web:a682811ec7ebae8cb4bd75",
  measurementId: "G-TG517C77W2"
};

const firebaseConfig1 = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STOREAGE_BUCKET,
  messagingSenderId: process.env.MESSING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};


export { firebaseConfig1 }