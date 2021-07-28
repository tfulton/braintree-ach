var express = require('express');
var path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*******************************************/
/*************** BEGIN: ROUTES**************/
/*******************************************/

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const customerRouter = require('./routes/customer');
app.use('/customer', customerRouter);

const tokenRouter = require('./routes/token');
app.use('/token', tokenRouter);

const paymentMethodRouter = require('./routes/method');
app.use('/method', paymentMethodRouter);

/*******************************************/
/*************** END: ROUTES ***************/
/*******************************************/

module.exports = app;
