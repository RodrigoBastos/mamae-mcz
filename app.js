var express = require("express");
var app = express();


app.get("/", function (req, res) {
  res.send("Clube Mamãe em Maceió!");
});

app.listen(app.get('port'), function () {
 console.log("Servidor carregado na porta: ", app.get('port'));
});