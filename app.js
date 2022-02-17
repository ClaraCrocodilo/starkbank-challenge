var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var starkbank = require('starkbank');
var nomeAleatorio = require('./utils/nomeAleatorio');
var taxIdAleatorio = require('./utils/taxIdAleatorio');
var randomInt = require('./utils/randomInt');
var criarInvoices = require('./utils/criarInvoices');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

require('dotenv').config();
require('./config/starkbank');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// O intervalo de geração das invoices deve ser de 3 horas, com a última geração ocorrendo em 3*8 = 24h
let timeout = 1000*60*60*3;
for (let i = 0; i <= 8; i++) {
    setTimeout(criarInvoices, i*timeout, randomInt(8, 12))
};


module.exports = app;
