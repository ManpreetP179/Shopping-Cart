const express = require('express');
const router = express.Router();
const { FieldValue } = require("firebase-admin/firestore")

const { db } = require('../firebase.js')

function checkParams(req){
    if(!!req.body.email || !!req.body.password){
        return res.status(422).json({
            email:"email is required",
            password:"password is required"
        })
    }
}


router.post('/signup', async(req, res, next) => {
  try{
    checkParams(req)
        const userResponse = await db.auth().createUser({
            email: req.body.email,
            password: req.body.password,
            emailVerified:true,
            disable: false
        })
        res.json(userResponse)
    }catch(error){
        res.status(400).send(error)
    }
});

router.post('/signin', async(req, res, next) => {
    try{
          checkParams(req)
         
          const userResponse =  await db.auth()
          .signInWithEmailAndPassword(auth, req.body.email, req.body.password)
          res.json(userResponse)
           
      }catch(error){
          res.status(400).send(error.message)
      }
  });
  

  
  router.post('/signout', async(req, res, next) => {
    try{
          checkParams(req)
          const userResponse = await db.auth().createUser({
              email: req.body.email,
              password: req.body.password,
              emailVerified:false,
              disable: false
          })
          res.json(userResponse)
      }catch(error){
          res.status(400).send(error)
      }
  });

module.exports = router;