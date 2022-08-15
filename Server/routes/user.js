const express = require('express');
const router = express.Router();
const { FieldValue } = require("firebase-admin/firestore")

const {firebase, db} = require('../firebase.js')

router.post('/', async(req, res, next) => {
    res.send(req.body)
});

router.post('/signin', async(req, res, next) => {
    try{
        if(!!req.body.email === false || !!req.body.password === false){
            return res.status(422).json({
                email:"email is required",
                password:"password is required"
            })
        }
           firebase.auth()
          .signInWithEmailAndPassword(req.body.email, req.body.password)
          .then(response =>{
            res.send(response)
          })
      }catch(error){
          res.status(400).send(error.message)
      }
  });

router.post('/signup', async(req, res, next) => {

    if(!!req.body.email || !!req.body.password){
        return res.status(422).json({
            email:"email is required",
            password:"password is required"
        })
    }
    firebase.auth().createUser({
        eamil:req.body.email,
        password:req.body.password,
        emailVerified:false,
        disable: false
        }
    ).then(response => {
    console.log("aaron")
    console.log(response)
    }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
        console.log('The password is too weak.');
    } else {
        console.log(errorMessage);
    }
    })
});
module.exports = router;