const express      = require('express');
const path         = require('path');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');
const bodyParser   = require('body-parser');
                     require('dotenv').config(); // 

// const videoList = 
const videoLinksRouter = require('./routes/videoList');
// const usersRouter = require('./routes/users');

const app = express();

// Usually a website can only make API requests to the domain that served it.
// This middleware allows any website to make requests to your API.
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(logger('dev'));
app.use(express.static('public')); // tell express to serve any files in the `public` folder
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());


app.use('/videos', videoLinksRouter);

module.exports = app;

