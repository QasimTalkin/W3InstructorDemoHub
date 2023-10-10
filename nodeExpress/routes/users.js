const express = require('express')
const userRouter = express.Router();

const {showUsers, creatUsers, updateUsers, deleteUser, loginUser} = require('../controller/users')

userRouter.get('/', showUsers )

userRouter.post('/', creatUsers)

userRouter.put('/:id', updateUsers)

userRouter.delete('/:id', deleteUser)

function verifyCorrectLocation(req, res, next){
  if (req.path == '/login'){
    next();
  } else {
    res.send("not allowed")
  }
}
userRouter.post('/login', verifyCorrectLocation, loginUser)

module.exports = userRouter;
