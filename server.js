const express = require("express");
const { createServer } = require("http");
const path = require("path");

const app = express();
const httpServer = createServer();

const publicPath = path.join(__dirname, "public");

// Si los archivos HTML están en la raíz (no en /public)
app.use(express.static(__dirname));
app.use(express.static(publicPath));

// Página principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Fallback
app.use((req, res) => {
  res.status(404).send("Página no encontrada - Nox");
});

const PORT = process.env.PORT || 8080;
httpServer.on("request", app);

httpServer.listen(PORT, () => {
  console.log(`Nox Proxy corriendo en el puerto ${PORT}`);
});