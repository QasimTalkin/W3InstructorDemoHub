const express = require("express");
const nodeApp = express();
nodeApp.use(express.json())
const userRoutes = require("./routes/users")


nodeApp.use('/users', userRoutes);

// nodeApp just use posts
// nodeApp.use('/post', postRoutes);

// nodeApp just use comments
// nodeApp.use('/comments', postRoutes);
nodeApp.listen(1010);
