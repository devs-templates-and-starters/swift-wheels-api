const router = require('express').Router();
const { check } = require('express-validator');
const { register, login } = require('./auth.controller');

router
  .post('/login', login)
  .post('/register', [
    check('firstName', 'First Name is required').trim().notEmpty(),
    check('lastName', 'Last Name is required').trim().notEmpty(),
    check('email', 'Invalid email').trim().isEmail(),
    check(
      'password',
      'Password should contain alteast one number, one special character, min 6 characters and no longer than 16'
    ).matches(/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/),
    check('gender', 'Gender is required').trim().notEmpty(),
    register,
  ]);

module.exports = router;
