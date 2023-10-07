const dbConnection = require('../db/connection')

function showCandidates(req, res) {
  const sqlQuery = `Select * from Candidates`;

  dbConnection.query(sqlQuery, (err, result)=> {
    res.json(result);
    res.end();
  });
}

function getCandidate(req, res) {
  const sqlQuery = `select * from candidates where id = ${req.params.id}`;

  dbConnection.query(sqlQuery, (error, result)=>{
    res.json(result);
    res.end();
  })
}

function addCdd( { body } , res) {
  const sqlQuery = `insert into candidates
  (first_name, last_name, industry_connected)
  values (?, ?, ?)`;
  console.log(body)
  const data = [body.first_name, body.ln, body.ic]

  dbConnection.query(sqlQuery, data, (error, result) => {
   res.send(`Added ${body.first_name} to Candidates`);

  });
}

function deletCdd(req, res) {

  const sqlQuery = `DELETE FROM candidates WHERE id = ?`;
  const id = req.params.id;

  dbConnection.query(sqlQuery, id, (err, result)=>{
    res.send(`Candidate with id ${id} was deleted`)
  })
}



module.exports = {
  showCandidates,
  getCandidate,
  deletCdd,
  addCdd
}
