const mongoose = require("mongoose");
// Schema nos permite definir donde esta almacenados los datos
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false,
  }
});

// model lo que hace es tomar el esquema y utilizarlo para guardar datos dentro de mongo db ya que son objetos
module.exports =  mongoose.model('task', TaskSchema);