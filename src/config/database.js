import { connect, connection } from 'mongoose';

export default () => {
  connect(process.env.DB_CONNECTION, { useNewUrlParser: true });

  connection.once('open', () => {
    console.log('Database connected!');
  });
  connection.on('error', err => {
    console.error('Database connection error:', err);
  });
};
