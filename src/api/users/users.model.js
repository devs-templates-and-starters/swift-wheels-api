const { Schema, model } = require('mongoose');
const { encrypt } = require('../../utils');

const stringType = {
  type: String,
  required: true,
};

const userSchema = new Schema({
  firstName: stringType,
  lastName: stringType,
  email: stringType,
  password: stringType,
  gender: stringType,
});

userSchema.pre('save', function (next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = encrypt(user.password);
  }

  next();
});

module.exports = model('users', userSchema);
