require('dotenv').config();

const app = require('./server');
const connectDb = require('./database');
const { appConfig, dbConfig } = require('./config');

async function initApp(dbConfig, appConfig) {
  try {
    await connectDb(dbConfig);
    app.listen(appConfig.port, () => {
      console.log(`Server started on ${appConfig.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

initApp(dbConfig, appConfig);
