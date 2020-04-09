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

// Done
router.get("/turn/:id", async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  // cambiamos el status
  task.status = !task.status;
  await task.save();

  // console.log(task);
  res.redirect("/");
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

// para obtener los datos de editar y enviarlo a otra vista
router.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  res.render("edit", {
    task,
  });
});

// para editarlos
router.post("/update/:id", async (req, res) => {
  const { id } = req.params;
  await Task.update({ _id: id }, req.body);
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
