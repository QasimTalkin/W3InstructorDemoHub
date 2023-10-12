const express = require("express");
const nodeApp = express();
nodeApp.use(express.json())
const userRoutes = require("./routes/users")
const loginRoutes = require("./routes/login")

nodeApp.use('/users', userRoutes);

nodeApp.use('/login', loginRoutes);

nodeApp.listen(1010);
