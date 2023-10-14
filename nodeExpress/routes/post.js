const express = require('express');
const postModel = require('../Model/postModel')
const userModel = require('../Model/userModel')
const postRoutes = express.Router()

postRoutes.get('/', (req, res)=>{
  postModel.findAll({
    include:{
      model:userModel,
      attributes:["user_name"]
    }
  }).then((data)=>res.json(data))
})


 module.exports = postRoutes
