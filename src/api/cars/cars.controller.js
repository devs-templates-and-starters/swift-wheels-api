const validator = require('../../utils/validator');
const Cars = require('./cars.model');

exports.getCars = async (req, res, next) => {
  try {
    validator(req);

    let { limit, page } = req.query;
    page = parseInt(page, 10);
    limit = parseInt(limit, 10);
    limit = limit <= 25 ? limit : 10;

    const cars = await Cars.find()
      .limit(limit)
      .skip(limit * page);
    res.send({ totalCount: cars.length, cars });
  } catch (e) {
    next(e);
  }
};
