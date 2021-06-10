const { verify } = require('jsonwebtoken');
const User = require('../api/users/users.model');
const errors = require('../config/errors.json');

const auth = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      throw { ...errors[403], data: 'Please authenticate.' };
    }
    token = token.split(' ')[1];
    const decoded = verify(token, process.env.SECRET);

    const user = await User.findById(decoded._id);
    if (!user) {
      throw { ...errors[404], data: `User with id - ${decoded._id} not found` };
    }

    req.user = user;
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = auth;
