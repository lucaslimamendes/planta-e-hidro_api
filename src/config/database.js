import { createConnection } from 'mongoose';

function makeNewConnection(uri) {
  const db = createConnection(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  db.on('error', function (error) {
    console.log(`MongoDB :: connection ${this.name} ${JSON.stringify(error)}`);
    db.close().catch(() =>
      console.log(`MongoDB :: failed to close connection ${this.name}`)
    );
  });

  db.on('connected', function () {
    console.log(`MongoDB :: connected ${this.name}`);
  });

  db.on('disconnected', function () {
    console.log(`MongoDB :: disconnected ${this.name}`);
  });

  return db;
}

const dbAPI = makeNewConnection(process.env.DB_CONNECTION_API);
const dbHELIX = makeNewConnection(process.env.DB_CONNECTION_HELIX);

export { dbAPI, dbHELIX };
