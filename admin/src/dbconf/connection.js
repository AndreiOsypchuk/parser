const mongoose = require('mongoose');

exports.establishDbConnection = async (cb) => {
  const uri = process.env.DB_HOST || process.env.DB_TEST;
  let connection;
  try {
    connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    cb(`connected to ${uri}`);
  } catch (e) {
    cb(e.message);
  }
  return connection;
};
