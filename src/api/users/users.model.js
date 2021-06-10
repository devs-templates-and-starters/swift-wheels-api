const { Schema, model } = require('mongoose');
const { encrypt, decrypt } = require('../../utils');
const errors = require('../../config/errors.json');
const { sign } = require('jsonwebtoken');

const stringType = {
  type: String,
  required: true,
};

const userSchema = new Schema({
  firstName: stringType,
  lastName: stringType,
  email: { ...stringType, unique: true },
  password: stringType,
  gender: stringType,
});

userSchema.statics.findCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw { ...errors[401], data: 'Auth Failed' };
  }

  if (!decrypt(user.password, password)) {
    throw { ...errors[401], data: 'Auth Failed' };
  }

  return user;
};

userSchema.methods.toJSON = function () {
  const user = this.toObject();

  delete user.password;
  delete user.__v;
  return user;
};

userSchema.methods.generateAuthToken = function () {
  const user = this;
  const token = sign({ _id: user._id.toString() }, process.env.SECRET);
  return token;
};

userSchema.pre('save', function (next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = encrypt(user.password);
  }

  next();
});

const User = model('users', userSchema);
module.exports = User;
