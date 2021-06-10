const { Schema, model } = require('mongoose');

const carSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
    unique: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  countryCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  specifications: {
    mileage: {
      type: Number,
      required: true,
    },
    engine: {
      type: Number,
      required: true,
    },
    bhp: {
      type: Number,
      required: true,
    },
    seating: {
      type: Number,
      required: true,
    },
    transmission: {
      type: String,
      required: true,
    },
    serviceCost: {
      type: Number,
      required: true,
    },
  },
});

module.exports = model('cars', carSchema);
