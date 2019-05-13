//initialize
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// ------AWS------------------ 
// var AWS = require('aws-sdk');
// AWS.config.update({region: 'us-east-1'});
//------------------------

const cors = require('cors'); 
const whitelist = ['http://localhost:3000','http://cloudaccel.io' , 'https://cloudaccel.io']

const corsOptions = {
  origin: function (origin, callback) {
   
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get controllers
var {} = require('./controllers/')

//Define routes
app.post('/', )
app.get('/:id',     )
app.listen(5000,()=>{console.log("5000")});
 //module.exports = app; //for aws lambda 