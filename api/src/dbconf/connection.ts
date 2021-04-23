import mongoose from 'mongoose';

export const establishDbConnection = (): void => {
  if (process.env.DB_HOST) {
    const uri = process.env.DB_HOST;
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    const connection = mongoose.connection;
    connection.once('open', () => console.log('connected to mongodb', uri));
    connection.on('error', (e) => console.log(e));
  } else {
    console.log('Connection with mongodb failed: DB_HOST is undefined');
  }
};
