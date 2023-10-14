const express = require("express");
const bcrypt = require("bcrypt");

const nodeApp = express();
nodeApp.use(express.json())
const userRoutes = require("./routes/users")
const loginRoutes = require("./routes/login")

let pass1 = "password";

let pass2 = "pa$$word"

let pass3 = "pa55word!1"

let hashPass = bcrypt.hashSync(pass1, 2);
console.log(bcrypt.compareSync(pass2, hashPass));
console.log("hi")

nodeApp.use('/users', userRoutes);

nodeApp.use('/login', loginRoutes);

nodeApp.listen(1010);
