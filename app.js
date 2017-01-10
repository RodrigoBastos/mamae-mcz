const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');

//Rotas
const mainRoutes = require('./server/routes/mainRoutes');
const mailRoutes = require('./server/routes/mailRoutes');

/**
 * Aplicativo
 * @returns {*}
 * @constructor
 */
function App () {

  return express()
    .set('view engine', 'jade')
    .set('views', path.join(__dirname, 'client', 'views'))
    .set('port', parseInt(process.env.PORT || 4500))
    .use(express.static(path.join(__dirname, 'client', 'public')))
    .use(favicon(__dirname + '/client/public/images/logo.png'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(mainRoutes)
    .use(mailRoutes);
}

module.exports = App;