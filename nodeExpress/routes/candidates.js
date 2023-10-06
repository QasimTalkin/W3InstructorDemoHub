const dbConnection = require('../db/connection')
const express = require('express')
const candidatesRouter = express.Router();



function showCandidates(req, res) {
  dbConnection.query(`Select * from Candidates`, (err, result)=> {
    res.json(result);
    res.end();
  });
}
candidatesRouter.get('/', showCandidates )


module.exports = candidatesRouter;
