import express from "express";

// Inicializar el servidor
const app = express();
// Configuración del servidor
const host = "localhost";
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
