const express = require("express");
const router = express.Router();

const Task = require("../models/task");

router.get("/", (req, res) => {
  // Operacion consulta
  

  res.render("index");
  //   res.send("hola que pex");
});

// ruta para agregar
router.post("/add", async (req, res) => {
  //   console.log(new Task(req.body));
  const task = new Task(req.body);
  //   await es para decirle que hay un nuevo dato y enviar un mensaje
  await task.save();
  res.send("recibido");
});
module.exports = router;
