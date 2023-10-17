const express = require("express");
const nodeApp = express();
const cors = require('cors');
nodeApp.use(cors());

nodeApp.use(express.json());
const userRoutes = require("./routes/users")
const loginRoutes = require("./routes/login")
const postRoutes = require("./routes/post")

nodeApp.use('/users', userRoutes);

nodeApp.use('/login', loginRoutes);

nodeApp.use('/posts', postRoutes)

nodeApp.listen(1010);
