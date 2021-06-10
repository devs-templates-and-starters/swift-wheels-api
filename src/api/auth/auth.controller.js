const validator = require('../../utils/validator');
const User = require('../users/users.model');
const errors = require('../../config/errors.json');

exports.register = async (req, res, next) => {
  try {
    validator(req);
    let newUser = new User(req.body);
    newUser = await newUser.save();
    res.json(newUser);
  } catch (e) {
    next(e);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      throw { ...errors[401], data: 'Auth failed' };
    }

    const user = await User.findCredentials(email, password);
    const token = user.generateAuthToken();
    res.json({ token });
  } catch (e) {
    next(e);
  }
};
