var express = require("express");

/**
 * Página inicial do site
 * @param req
 * @param res
 * @returns {String}
 */
function getIndex (req, res) {

  // Em desenvolvimento, renderize a página index
  if (process.env.NODE_ENV == "development") return res.render("index");

  // Em produção, renderize a página em construção
  res.render("build");
}

module.exports = new express.Router()
  .get("/", getIndex);