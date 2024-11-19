const express = require("express");
const { login, protectedContent, add1, add2 } = require("./controllers/authController");

const router = express.Router();

// Rota pública
router.get("/", (request, response) => {
  response.json({ message: "Endpoint que não exige autenticação!" });
});

// Rota de login
router.post("/login", login);

// Rota protegida
router.get("/protected", protectedContent);

// Rota Adicionada (1)
router.get("/add1", add1);

// Rota Adicionada (2)
router.get("/add2", add2);

module.exports = router;
