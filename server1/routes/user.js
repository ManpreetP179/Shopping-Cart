const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");

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
        
      }catch(error){
          res.status(400).send(error.message)
      }
});

router.post('/signup', async(req, res, next) => {

    if(!!req.body.email === false|| !!req.body.password === false){
        return res.status(422).json({
            email:"email is required",
            password:"password is required"
        })
    }

    const {email, password } = req.body

  
});



module.exports = router;