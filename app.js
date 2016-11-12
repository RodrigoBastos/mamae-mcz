var express = require("express");
var app = express();


app.get("/", function (req, res) {
  res.send("Clube Mamãe em Maceió!");
});

app.listen(3000, function () {
 console.log("Servidor carregado na porta 3000!");
});