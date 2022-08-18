const express = require('express');
const userController = require('../controller/user');

const router = express.Router();
// TODO move implementation to controller and service layer
router.get('/user/:id', userController.getUser);
router.get('/user/signin', userController.getUser);
router.get('/user/signup', userController.getUser);
router.get('/user/signout')

module.exports = router;
