const { validationResult } = require('express-validator');
const errors = require('../config/errors.json');

const validator = (req) => {
  let err = validationResult(req);
  if (!err.isEmpty()) {
    err = err.array().map((e) => e.msg);
    throw { ...errors[400], data: err };
  }
};

module.exports = validator;
