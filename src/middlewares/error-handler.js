const errors = require('../config/errors.json');

exports.genericErrorHandler = (err, _, res, _1) => {
  const { statusCode, message, data } = err;
  res.status(statusCode || 500).json({ statusCode, message, error: data });
};

exports.notFoundErrorHandler = (_, res) => {
  res.status(404).json({ ...errors[404], error: 'Invalid route' });
};
