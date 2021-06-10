const router = require('express').Router();
const { check } = require('express-validator');
const { getCars } = require('./cars.controller');

router
  .get('/', [
    check('limit', 'Limit is required ').notEmpty(),
    check('limit', 'Limit should be numeric').isNumeric(),
    check('page', 'Page no. is required ').notEmpty(),
    check('page', 'Page no. should be numeric ').isNumeric(),
    getCars,
  ])
  .get('/:id');

module.exports = router;
