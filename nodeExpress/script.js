const express = require("express");
const nodeApp = express();
nodeApp.use(express.json())
const userRoutes = require("./routes/users")
const candidatesRoutes = require("./routes/candidatesRoutes")

nodeApp.use('/users', userRoutes);
nodeApp.use('/candidates', candidatesRoutes )

nodeApp.listen(1010);
