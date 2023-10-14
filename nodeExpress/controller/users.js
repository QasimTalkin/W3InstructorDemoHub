const userModel = require("../Model/userModel")
const bcrypt = require("bcrypt")
async function showUsers(request, response) {
  console.log("GET USERS");

  let users = await userModel.findAll({
    attributes:{
      exclude:['password', 'updatedAt']
    }
  });
    response.json(users)
    response.end();
  }

function showUser(request, response){
  userModel.findOne({
    attributes:{
      exclude:['password']
    }
  },{
    where:{
      id:request.params.id
    }
  })
  .then((result)=>{
    response.json(result)
    response.end();
  })
  .catch((err)=>{
    console.log(err);
    response.status(500).json(err)
  })
}


function loginUser(req, res) {
  userModel.findOne({
    where:{
      user_name:req.body.user_name
    }
  }).then((result)=>{

    if(!result){
      res.status(400).json({message:"Incorrect Email"})
      return
    }

    if (bcrypt.compare(req.body.password, result.password)){
      res.json({message:"WELCOME YOUVE LOGGED IN", userData:result})
      return;
    }

    res.status(400).json({message:"Incorrect Pass"})
  })
}


function creatUsers(request, response) {
  userModel.create({
    user_name: request.body.user_name,
    email: request.body.email,
    password: request.body.password
  })
  .then((result)=>response.send(result))
  .catch((err)=>{
    console.log(err);
    response.status(500).json(err)
  }
  )
}

function updateUsers(request, response) {
  userModel.update(request.body, {where:{id:request.params.id}})
  .then((result)=>response.send(result))
  .catch((err)=>{
    console.log(err);
    response.status(500).json(err)
  })
}

function deleteUser(request, response) {
  userModel.destroy({
    where:{
      id:request.params.id
    }
  }).then((result)=>response.send(result))
  .catch((err)=>{
    console.log(err);
    response.status(500).json(err)
  })
}


module.exports = {
  showUsers,
  creatUsers,
  updateUsers,
  deleteUser,
  loginUser,
  showUser
}
