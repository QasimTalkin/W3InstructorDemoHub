const express = require("express");


const myNodeServerApp = express();




// check or validate request before it goes to any end points
// middle
myNodeServerApp.use(express.json())




myNodeServerApp.get('/qasim/:id', function sayHi(request, response) {
  response.json(request.params)
  response.end();
})

myNodeServerApp.post('/qasim', function sayHi(request, response) {
  console.log(request.body)
  response.json(request.body)
  response.end();
})

myNodeServerApp.delete('/qasim', function sayHi(request, response) {
  console.log('DELETE Qasim')
  response.end();
})



myNodeServerApp.put('/qasim', function sayHi(request, response) {
  console.log('Upate Qasim')
  response.end();
})


myNodeServerApp.listen(2345);

// appRq.get("/qqasoim", do this);
// aapRe.post("/tom", do this);
