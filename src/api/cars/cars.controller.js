const validator = require('../../utils/validator');
const Cars = require('./cars.model');
const errors = require('../../config/errors.json');

exports.getCars = async (req, res, next) => {
  try {
    validator(req);

    let { limit, page } = req.query;
    limit = parseInt(limit, 10);
    page = parseInt(page, 10);
    limit = limit >= 25 ? 10 : limit;

    const cars = await Cars.find({})
      .limit(limit)
      .skip(limit * page);
    res.send({ totalCount: cars.length, cars });
  } catch (e) {
    next(e);
  }
};

exports.getCar = async (req, res, next) => {
  try {
    const car = await Cars.findById(req.params.id);
    if (!car) {
      throw {
        ...errors[404],
        data: `No car data found with the given id ${req.params.id}`,
      };
    }
    res.json(car);
  } catch (e) {
    next(e);
  }
};
