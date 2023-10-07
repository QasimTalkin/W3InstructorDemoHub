const express = require('express')
const {showCandidates, getCandidate, addCdd, deletCdd} = require('../controller/candidatesController')
const candidatesRouter = express.Router();


candidatesRouter.get('/', showCandidates );

candidatesRouter.get('/:id', getCandidate);

candidatesRouter.post('/', addCdd)

candidatesRouter.delete('/:id', deletCdd)

module.exports = candidatesRouter;
