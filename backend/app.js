const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

// import Routes
const booksRoute = require('./routes/books');
const usersRoute = require('./routes/users');

app.use('/books', booksRoute);
app.use('/users', usersRoute);

// index route
app.get('/', (req, res) => {
    res.send('we are in root index');
});

// connect to database
mongoose.connect(
    'mongodb://localhost:27017/bookstore',
    { useNewUrlParser: true, useUnifiedTopology: true},
    function(err){
        if(err){
            console.log('connection failed');
        }
        else{
            console.log('database connected');
        }
    }
);

// listen to server
app.listen(5000);
