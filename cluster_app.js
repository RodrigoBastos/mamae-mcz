var cluster = require("cluster");
var numCPUs = require("os").cpus().length;

if (cluster.isMaster) {

  // // Fork Workers
  // for (var i = 0; i < numCPUs; i++) {
  //   cluster.fork();
  // }

  // cluster.on("exit", function (worker) {
  //   console.log("Cluster number " + worker.id + " died :(. Respawning...");
  //   cluster.fork();
  // });
} else {

  // Aplicativo express
  var App = require("./app");
  var app = new App();

  // Inicia Servidor
  app.listen(app.get("port"));

  console.log(
    "Express cluster number " + cluster.worker.id +
    " listening on port " + app.get("port") +
    " in " + app.get("env") + " mode");

}