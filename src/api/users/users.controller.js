const User = require('../users/users.model');
const errors = require('../../config/errors.json');

exports.getUser = async (req, res, next) => {
  res.json(req.user);
};

exports.updateUser = async (req, res, next) => {
  try {
    console.log(req.headers);
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedUser) {
      throw {
        ...errors[404],
        data: `Unable to update user. id - ${req.params.id} not found`,
      };
    }

    res.json(updatedUser);
  } catch (e) {
    next(e);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    await req.user.remove();

    res.json(req.user);
  } catch (e) {
    next(e);
  }
};
