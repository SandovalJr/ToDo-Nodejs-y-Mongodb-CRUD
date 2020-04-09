const express = require("express");
const router = express.Router();

const Task = require("../models/task");

router.get("/", async (req, res) => {
  // Operacion consulta
  const tasks = await Task.find();
  console.log(tasks);

  //   enviamos las actividades a el index
  res.render("index", {
    tasks,
  });
  //   res.send("hola que pex");
});

// ruta para agregar
router.post("/add", async (req, res) => {
  //   console.log(new Task(req.body));
  const task = new Task(req.body);
  //   await es para decirle que hay un nuevo dato y enviar un mensaje
  await task.save();

  //   redireccion
  res.redirect("/");
});

router.get("/delete/:id", async (req, res) => {
  // console.log(req.params);
  //   obtenemos el id
  const { id } = req.params;
  await Task.remove({ _id: id });

  //   redireccion
  res.redirect("/");
});

module.exports = router;
