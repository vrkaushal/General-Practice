const express      = require('express');
// const path         = require('path');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');
const bodyParser   = require('body-parser');
                     require('dotenv').config(); //do i need this? 

const inventoryRouter  = require('./routes/inventory');
const warehousesRouter = require('./routes/warehouses');

const app = express();

// cors middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', warehousesRouter);
app.use('/', inventoryRouter);




module.exports = app;

