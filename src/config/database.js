import { connect, connection } from 'mongoose';
import path from 'path';
import { config } from 'dotenv';

config({path: path.resolve(__dirname, '../../.env')});

connect(process.env.DB_CONNECTION, { useNewUrlParser: true });

connection.once('open', _ => {
    console.log('Database connected:', process.env.DB_CONNECTION)
});
connection.on('error', err => {
    console.error('Database connection error:', err)
});
