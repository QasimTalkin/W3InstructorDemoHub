

const users = [
  {
    username:"qasim",
    password:"weak"
  },
  {
    username:"tom",
    password:"strong"
  }
]

function showUsers(request, response) {
  console.log("GET USERS");
  response.json(users)
  response.end();
}

function creatUsers(request, response) {
  console.log("SET USERS");
  users.push(request.body)
  console.log(request.method)
  response.json(users)
  response.end();
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
  console.log("Update USERS");
  let userId = request.params.id;
  const userFound = users.some((item)=>item.username == userId);
  if(userFound){
    response.json(request.body)
  } else {
    response.send("USER NOT FOUND")
  }

  response.end();
}

function deleteUsers(request, response) {
  console.log('DELETE Users')
  console.log(request.method)
  response.json(request.body)
  response.end();
}


module.exports = {
  showUsers,
  creatUsers,
  updateUsers,
  deleteUsers,
  loginUser
}
