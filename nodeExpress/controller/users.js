const userModel = require("../Model/userModel")

async function showUsers(request, response) {
  console.log("GET USERS");
  // let user = userModel.findAll().then((result)=> {
  //  res.send(result);
  //  res.end();
  //})
  let users = await userModel.findAll();
    response.json(users)
    response.end();
  }

function creatUsers(request, response) {
  userModel.create({
    userName: request.body.userName,
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

function loginUser(req, res) {
  console.log(req.path)
  const {username, password} = req.body;
  const canLongIn = users.some((item)=>{
    return (item.username == username && item.password == password)
  })
  if (canLongIn){
    res.send("YAYA youve loogged in")
  } else {
    res.send("NOT ALLOWED")
  }
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
  loginUser
}
