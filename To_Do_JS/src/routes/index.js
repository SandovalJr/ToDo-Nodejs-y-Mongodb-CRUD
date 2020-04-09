const express = require("express");
const router = express.Router();

router.get("/", (req , res) => {
res.render('index');
//   res.send("hola que pex");
});

module.exports = router;
