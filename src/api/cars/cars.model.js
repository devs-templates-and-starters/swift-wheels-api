const { Schema, model } = require('mongoose');

const stringType = {
  type: String,
  required: true,
};

const numberType = {
  type: Number,
  required: true,
};

const carsSchema = new Schema({
  brand: stringType,
  model: { ...stringType, unique: true },
  year: numberType,
  description: stringType,
  countryCode: stringType,
  country: stringType,
  price: stringType,
  specifications: {
    mileage: numberType,
    engine: numberType,
    bhp: numberType,
    seating: numberType,
    transmission: stringType,
    serviceCost: numberType,
  },
});

module.exports = model('cars', carsSchema);
