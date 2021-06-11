const errors = require('../../config/errors.json');
const User = require('../users/users.model');

exports.addItemToWishlist = async (req, res, next) => {
  try {
    const carId = req.params.id;
    if (req.user.wishlist.includes(carId)) {
      throw { ...errors[400], data: 'Item already available in wishlist' };
    }

    req.user.wishlist.push(carId);
    await req.user.save();
    res.json({ wishlist: req.user.wishlist });
  } catch (e) {
    next(e);
  }
};

exports.getWishlistItems = async (req, res, next) => {
  try {
    const { wishlist } = await User.findOne({ _id: req.user._id }).populate(
      'wishlist'
    );
    res.send(wishlist);
  } catch (e) {
    next(e);
  }
};

exports.removeItemFromWishlist = async (req, res, next) => {
  try {
    const carId = req.params.id;
    let { wishlist } = req.user;
    if (!wishlist.includes(carId)) {
      throw { ...errors[404], data: 'Item does not exist in the wishlist' };
    }
    wishlist = wishlist.filter((w) => w.toString() !== carId);
    await req.user.save();
    res.status(204).json();
  } catch (e) {
    next(e);
  }
};
