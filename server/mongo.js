const mongoose = require('mongoose');
const env = require('./env/environment');

mongoose.Promise = global.Promise;

const mongoUri = `mongodb://${env.dbName}:${env.key}@${env.dbName}.mongo.cosmos.azure.com:${env.cosmosPort}/?ssl=true`;

function connect() {
  return mongoose.connect(mongoUri, { auth: { user: env.dbName, password: env.key }});
}

module.exports = {
  connect,
  mongoose
};
