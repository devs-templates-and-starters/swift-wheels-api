const mongoose = require('mongoose');

const options = {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
};

mongoose.connection.on('connected', () => {
  console.log(new Date(), 'Connected to DB');
});

mongoose.connection.on('error', (err) => {
  console.log(new Date(), 'There was an error while connecting to db', err);
});

try {
  mongoose.connect(process.env.MONGO_URI, options);
  console.log(new Date(), 'connecting to DB');
} catch (e) {
  console.log('Error', e);
}
