var path = require("path");
var express = require("express");
var favicon = require("serve-favicon");

//Rotas
var mainRoutes = require("./server/routes/mainRoutes");

/**
 * Aplicativo
 * @returns {*}
 * @constructor
 */
function App () {

  return express()
    .set("view engine", "jade")
    .set("views", path.join(__dirname, "client", "views"))
    .set("port", parseInt(process.env.PORT || 5000))
    .use(express.static(path.join(__dirname, "client", "public")))
    .use(favicon(__dirname + "/client/public/images/logo.png"))
    .use(mainRoutes);
}

module.exports = App;