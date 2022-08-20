import express from 'express';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../firebase.js';
const router = express.Router();


// TODO add firebase and db, etc. etc.
//product belongs to user table and has many reviews table
// products table
// title :string
// description: string
// imageUrl: string
// review_id: referece?
// writer: user.email

router.post('/', async (req, res, next) => {
    res.send(req.body)
});

router.post('/signin', async (req, res, next) => {
    try {
        if (!!req.body.email === false || !!req.body.password === false) {
            return res.status(422).json({
                email: "email is required",
                password: "password is required"
            })
        }
        const { email, password } = req.body;
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                res.send(userCredential.user)
            })
            .catch((error) => {
                console.log(`Something bad happened lol: ${error.code}`);
            })
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.post('/signup', async (req, res, next) => {

    if (!!req.body.email === false || !!req.body.password === false) {
        return res.status(422).json({
            email: "email is required",
            password: "password is required"
        })
    }

    const { email, password } = req.body;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // signed in... hopefully
            res.send(userCredential.user);
        })
        .catch((error) => {
            console.log(`Something bad happened lol: ${error.code}`);
        })

    // firebase.auth().createUser({
    //     email:req.body.email,
    //     password:req.body.password,
    //     emailVerified:false,
    //     disable: false
    //     }
    // ).then(response => {

    // res.send(response)
    // }).catch(function(error) {
    // // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // if (errorCode == 'auth/weak-password') {
    //     console.log('The password is too weak.');
    // } else {
    //     console.log(errorMessage);
    // }
    // })
});

export default router;
