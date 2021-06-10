exports.genericErrorHandler = (err, _, res, _1) => {
  const { statusCode, message, data } = err;
  res.status(statusCode || 500).json({ statusCode, message, data });
};

exports.notFoundErrorHandler = (_, res) => {
  res
    .status(404)
    .json({ statusCode: 404, message: 'Not Found', data: 'Invalid route' });
};
