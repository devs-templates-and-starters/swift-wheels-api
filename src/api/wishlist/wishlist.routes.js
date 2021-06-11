const auth = require('../../middlewares/auth');
const {
  addItemToWishlist,
  removeItemFromWishlist,
  getWishlistItems,
} = require('./wishlist.controller');

const router = require('express').Router();

router
  .post('/:id', auth, addItemToWishlist)
  .get('/', auth, getWishlistItems)
  .delete('/:id', auth, removeItemFromWishlist);

module.exports = router;
