import mongoose from 'mongoose';
import config from 'config';

export default async function connect() {
  const dbUri = config.get<string>('dbUri');
  return mongoose
    .connect(dbUri)
    .then(() => {
      console.log('Connected to DB');
    })
    .catch((error) => {
      console.error('Could not connect to db');
      process.exit(1);
    });
}
