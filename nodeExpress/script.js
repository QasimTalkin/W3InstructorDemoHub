const express = require("express");
const nodeApp = express();
nodeApp.use(express.json())
const userRoutes = require("./routes/users")


nodeApp.use('/users', userRoutes);


nodeApp.listen(1010);
