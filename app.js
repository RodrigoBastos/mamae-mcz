var express = require("express");
var app = express();

app.set("port", parseInt(process.env.PORT) || 3000);
//.set('port', config.port) int(process.env.PORT)

app.get("/", function (req, res) {
  res.send("Clube Mamãe em Maceió!");
});

app.listen(app.get("port"), function () {
 console.log("Servidor carregado na porta: ", app.get("port"));
});