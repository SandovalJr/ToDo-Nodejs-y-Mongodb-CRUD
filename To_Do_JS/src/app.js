const path = require("path");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

// Conectando base de datos
mongoose
  .connect("mongodb://localhost/crud-mongo")
  .then((db) => console.log("db conectada"))
  .catch((err) => console.log(err));

// IMPORTANDO RUTAS (importing routes)
const indexRoutes = require("./routes/index");

// CONFIGURACIONES (settings)
app.set("port", process.env.PORT || 3000);
// para evitar escribir toda la direccion utilizamos __dirname
app.set("views", path.join(__dirname, "views"));
// agregamos motor de busqueda
app.set("view engine", "ejs");

// MIDDLEWARES (procesa los dtaos antes de que lleguen)
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// RUTAS (ROUTES)
app.use("/", indexRoutes);

// iniciando servidor (starting the server)
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
