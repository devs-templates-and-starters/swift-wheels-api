const User = require('../users/users.model');
const errors = require('../../config/errors.json');

exports.updateUser = async (req, res, next) => {
  try {
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
    const deletedUser = awaitUser.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      throw {
        ...errors[404],
        data: `Unable to delete user. id - ${req.params.id} not found`,
      };

    res.json(deletedUser);
  } catch (e) {}
};
