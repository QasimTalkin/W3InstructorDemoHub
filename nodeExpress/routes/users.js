const express = require('express')
const userRouter = express.Router();

userRouter.get('/', function showUsers(request, response) {
  console.log("GET USERS");
  response.json(request.method)
  response.end();
})

userRouter.post('/', function creatUsers(request, response) {
  console.log("SET USERS");
  console.log(request.method)
  response.json(request.body)
  response.end();
})


userRouter.put('/', function updateUsers(request, response) {
  console.log("Update USERS");
  console.log(request.method)
  response.json(request.body)
  response.end();
})


userRouter.delete('/', function deleteUsers(request, response) {
  console.log('DELETE Users')
  console.log(request.method)
  response.json(request.body)
  response.end();
})


module.exports = userRouter;
