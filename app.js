var express = require("express");

/**
 * Página inicial do site
 * @param req
 * @param res
 * @returns {String}
 */
function indexRoute (req, res) {

  // Em desenvolvimento, renderize a página index
  if (process.env.NODE_ENV == "development") return res.render("index");

  // Em produção, renderize a página em construção
  res.render("build");
}

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
    .get("/", indexRoute)
}

module.exports = App;