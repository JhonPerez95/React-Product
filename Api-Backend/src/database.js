const mongoose = require('mongoose');

async function connectDb({ host, port, dbName }) {
  const uri = `mongodb://${host}:${port}/${dbName}`;
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
mongoose.connection.on('open', () => {
  console.log('Database connect');
});
module.exports = connectDb;
