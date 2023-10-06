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

// dbConnection.query(`Select * from Candidates`, (err, result)=> console.log(result));

dbConnection.query(`Insert Into Candidates (first_name, last_name, industry_connected) values ('leo', 'sosa', 0)`, (err, result) => {
  if (err){
  console.log("ERROR", err);
  }else {
    console.log('DONE!!!!!!!!', result);
  }
}
)
// dbConnection.query(`Select * from Candidates`, (err, result)=> console.log(result));
