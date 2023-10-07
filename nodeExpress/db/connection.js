const mySql = require('mysql2')

const dbConnection = mySql.createConnection(
  {
    host:'localhost',
    user:'abc',
    password:'1234',
    database:'elction'
  },
  console.log('Connected')
);


module.exports = dbConnection;
