var path = require("path");
var express = require("express");
var favicon = require("serve-favicon");
var bodyParser = require("body-parser");

//Rotas
var mainRoutes = require("./server/routes/mainRoutes");
var mailRoutes = require("./server/routes/mailRoutes");

/**
 * Aplicativo
 * @returns {*}
 * @constructor
 */
function App () {

  return express()
    .set("view engine", "jade")
    .set("views", path.join(__dirname, "client", "views"))
    .set("port", parseInt(process.env.PORT || 3016))
    .use(express.static(path.join(__dirname, "client", "public")))
    .use(favicon(__dirname + "/client/public/images/logo.png"))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(mainRoutes)
    .use(mailRoutes);
}

module.exports = App;