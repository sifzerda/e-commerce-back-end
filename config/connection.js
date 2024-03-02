require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
// =================================== confirm Sequelize connected ================================ //
//                 https://sequelize.org/v3/docs/getting-started/#test-the-connection
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection with Sequelize has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

  // ============================================================================================= //

module.exports = sequelize;
