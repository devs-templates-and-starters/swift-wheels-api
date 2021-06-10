const logRequests = (req, _, next) => {
  console.log(new Date(), req.method, req.path);
  next();
};

module.exports = logRequests;
