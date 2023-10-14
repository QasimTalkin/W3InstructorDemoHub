const express = require("express");
const bcrypt = require("bcrypt");

const nodeApp = express();
nodeApp.use(express.json())
const userRoutes = require("./routes/users")
const loginRoutes = require("./routes/login")
const postRoutes = require("./routes/post")

nodeApp.use('/users', userRoutes);

nodeApp.use('/login', loginRoutes);

nodeApp.use('/posts', postRoutes)

nodeApp.listen(1010);
