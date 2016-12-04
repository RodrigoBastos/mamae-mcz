var express = require("express");

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
    .set("views", "./client/views")
    .set("port", parseInt(process.env.PORT || 5000))
    .use(express.static("client/public"))
    .use(mainRoutes);
}

module.exports = App;