const express = require('express');
const userController = require('../controller/user');

const router = express.Router();
// TODO move implementation to controller and service layer
router.get('/user/:id', userController.getUser);
router.post('/user/signin', userController.signIn);
router.post('/user/signup', userController.signUp);
router.post('/user/signout', userController.signOut)

module.exports = router;
