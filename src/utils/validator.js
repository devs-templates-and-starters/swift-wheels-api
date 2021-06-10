const { validationResult } = require('express-validator');
const errors = require('../config/errors.json');

const validator = (req) => {
  let err = validationResult(req);
  if (!err.isEmpty()) {
    err = err.array().map((e) => {
      return e.msg;
    });
    throw { ...errors[401], data: err };
  }
};

module.exports = validator;
