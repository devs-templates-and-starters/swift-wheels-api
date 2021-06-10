const auth = require('../../middlewares/auth');
const { getUser, updateUser, deleteUser } = require('./users.controller');

const router = require('express').Router();

router
  .get('/me', auth, getUser)
  .patch('/me', auth, updateUser)
  .delete('/me', auth, deleteUser);

module.exports = router;
