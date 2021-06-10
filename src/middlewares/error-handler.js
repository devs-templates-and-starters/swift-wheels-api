const logger = require('../utils/logger');

exports.notFoundErrorHandler = (_, res) => {
  res
    .status(404)
    .json({ statusCode: 404, message: 'Not Found', data: 'Invalid route' });
};

exports.genericErrorHandler = (err, _, res, _1) => {
  const { statusCode, message, data } = err;
  logger.error('An error occured:', message);
  res.status(statusCode || 500).json({ statusCode, message, data });
};
