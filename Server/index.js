const express = require("express");

const cors = require("cors");
const logger = require('morgan');
const path = require('path');
const body_parser = require('body-parser');
// const firebase =  require('firebase');
// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
// const credentials =require('./shopping-cart-15c11-firebase-adminsdk-jcgs2-c1b7d719de.json')
const credentials=require('./serviceAccountKey.json')
const { db } = require('./firebase.js')
// const firebaseConfig = {
//     apiKey: "AIzaSyDjK6r_UAt5RMfChKm-XrqQrRDpZ3WxDOQ",
//     authDomain: "shopping-cart-15c11.firebaseapp.com",
//      projectId: "shopping-cart-15c11",
//      storageBucket: "shopping-cart-15c11.appspot.com",
//      messagingSenderId: "14356686512",
//     appId: "1:14356686512:web:a682811ec7ebae8cb4bd75",
//      measurementId: "G-TG517C77W2"
//    };

const app = express();

app.use(cors());
app.use(logger("dev"))

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.post('/addfriend', async (req, res) => {
    const { name, status } = req.body
    const peopleRef = db.collection('people').doc('associates')
    const res2 = await peopleRef.set({
        [name]: status
    }, { merge: true })
    // friends[name] = status
    res.status(200).send(res2)
})
const friends = {
    'james': 'friend',
    'larry': 'friend',
    'lucy': 'friend',
    'banana': 'enemy',
}

app.get('/friends', async (req, res) => {
    const peopleRef = db.collection('people').doc('associates')
    const doc = await peopleRef.get()
    if (!doc.exists) {
        return res.sendStatus(400)
    }

    res.status(200).send(doc.data())
})

app.get('/friends/:name', (req, res) => {
    const { name } = req.params
    if (!name || !(name in friends)) {
        return res.sendStatus(404)
    }
    res.status(200).send({ [name]: friends[name] })
})


app.patch('/changestatus', async (req, res) => {
    const { name, newStatus } = req.body
    const peopleRef = db.collection('people').doc('associates')
    const res2 = await peopleRef.set({
        [name]: newStatus
    }, { merge: true })
    // friends[name] = newStatus
    res.status(200).send(friends)
})

app.delete('/friends', async (req, res) => {
    const { name } = req.body
    const peopleRef = db.collection('people').doc('associates')
    const res2 = await peopleRef.update({
        [name]: FieldValue.delete()
    })
    res.status(200).send(friends)
})

const user_router = require("./routes/user")
const product_router = require("./routes/product")
app.use('v1/api/users', user_router)
app.use('v1/api/products', product_router)

app.listen(4000, () => console.log("http://localhost:4000"));