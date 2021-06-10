const { updateUser, deleteUser } = require('./users.controller');

const router = require('express').Router();

router.patch('/:id', updateUser).delete('/:id', deleteUser);

module.exports = router;
