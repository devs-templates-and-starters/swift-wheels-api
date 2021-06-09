const logRequests = (req) => {
  console.log(new Date(), req.method, req.path);
};

module.exports = logRequests;
