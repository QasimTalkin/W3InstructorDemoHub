//generate-jwt.js
const jwt = require("jsonwebtoken"); // Import
const secret = "This is our secret";

// The data to be used for generating JWT
const mockLoginData = {
    accountId: 1,
    email:"brandon@mail.com",
    name:"qasim",
    age:12,
    height: 3.2,
    permissions:{
        role:"ADMIN",
    }
}

let token1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOjEsImVtYWlsIjoiYnJhbmRvbkBtYWlsLmNvbSIsIm5hbWUiOiJxYXNpbSIsImFnZSI6MTIsImhlaWdodCI6My4yLCJwZXJtaXNzaW9ucyI6eyJyb2xlIjoiQURNSU4ifSwiaWF0IjoxNjk3NjcyNTI3LCJleHAiOjE2OTc3NTg5Mjd9.N_fOhRHcIt8yLKmrXilWg3SmMv2q9UX2sokYuwu49RM"

jwt.verify(token1, secret, printVerify)

function printVerify(err, result){
  console.log(result)
}

// Generate token with the above data.
const token = jwt.sign(mockLoginData, secret, {expiresIn:"1h"});
console.log(token);
