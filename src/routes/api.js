var express = require('express')
const User = require('../models/User')
const Databaseconnection = require('../database');

var app = express()
const port =  3000;

Databaseconnection.connectDb();

app.get('/profile', function (req, res) {
    User.find()
    .then(user => {
        res.json ({
            'confirmation' :'seccess',
            'data': user
        });
    })
    .catch(err => {
        res.json ({
            'confirmation' :'fail',
            'message': err.message
        });
    });
    
});

app.get('/addme',function (req, res) {
  User.create(
    {
      "firstName": "hosam", 
      "lastName": "almograby",
      "email": "hos@am",
      "phone": "45635454654"
    }
  ).then(user => {
    res.json ({
        'confirmation' :'seccess',
        'data': user
    });
})
.catch(err => {
    res.json ({
        'confirmation' :'fail',
        'message': err.message
    });
  });

});
    

app.listen(port);
console.log('Server started at http://localhost:' + port);