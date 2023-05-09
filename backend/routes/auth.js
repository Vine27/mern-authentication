const express = require("express");
const router = express.Router();
//import controller
const {signup, accountActivation, signin} = require("../controller/auth");
//import validators
const {userSignupValidator, userSigninValidator} = require("../validator/auth");
const {runValidation} = require("../validator/index");

router.post('/signup', userSignupValidator, runValidation, signup);
// router.post('/account-activation', accountActivation);
router.post('/signin', userSigninValidator, runValidation, signin);


module.exports = router;