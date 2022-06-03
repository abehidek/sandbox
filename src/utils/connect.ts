import mongoose from 'mongoose';
import config from 'config';

export default async function connect() {
  // const dbUri = config.get<string>('dbUri');
  const dbUri = "mongodb://localhost:27017/mern"; 
  try {
    await mongoose.connect(dbUri);
    console.log('Could connect to DB');
  } catch (error) {
    console.error('Could not connect to db');
    console.error(error);
    process.exit(1);
  }
}
