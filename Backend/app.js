const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const usersRoutes = require("./routes/users-routes");
const taskRoutes= require("./routes/task-routes");
const teamsRoutes = require("./routes/teams-routes");

const app = express(); 
app.use(bodyParser.json());


app.use((req, res, next) => {

  //This allows us to controls with domains have access to these resources
  res.setHeader("Access-Control-Allow-Origin","*");
  
  //This controls within headers are allowed
  res.setHeader(
      "Access-Control-Allow-Headers", 
      "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  //This basically controls which HTTP methods can be used on the frontend    
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE');


  //move to next middleware
  next();
});


app.use("/api/users", usersRoutes);
app.use("/api/task",taskRoutes);
app.use("/api/teams",teamsRoutes);

app.use((error, req, res,next) => {

  if(res.headerSent) {
      return next(error);
  }
  res.status(error.code || 500);  
  res.json( { message: error.message || 'An unknown error occured'  });

});

const url = 'mongodb+srv://sainaveenbysani:Sai12345@cluster0.wuqdwff.mongodb.net/project?retryWrites=true&w=majority';
mongoose
  .connect(
    url
  )
  .then(() => {
    app.listen(3001);
  })
  .catch(err => {
    console.log(err);
  });
