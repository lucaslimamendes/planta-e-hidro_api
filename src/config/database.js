import { connect, connection } from 'mongoose';

connect(process.env.DB_CONNECTION, { useNewUrlParser: true });

connection.once('open', () => {
  console.log('Database connected:', process.env.DB_CONNECTION);
});
connection.on('error', err => {
  console.error('Database connection error:', err);
});
