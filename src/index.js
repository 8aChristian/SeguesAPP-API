const express = require("express");
// Se importa el framework Express para crear y manejar el servidor web.

const mongoose = require("mongoose");
// Se importa la biblioteca Mongoose para interactuar con la base de datos MongoDB.

require("dotenv").config();
// Se utiliza el módulo dotenv para cargar variables de entorno desde un archivo .env.

const userRoutes = require("./routes/user");
// Se importan las rutas relacionadas con las operaciones de usuario.

const app = express();
// Se crea una instancia de la aplicación Express.

const port = process.env.PORT || 9000;
// Se define el puerto del servidor, utilizando el proporcionado en el archivo .env o el puerto 9000 por defecto.

// Middleware para permitir el análisis del cuerpo de las solicitudes en formato JSON.
app.use(express.json());

// Se montan las rutas de usuario bajo el prefijo '/api'.
app.use("/api", userRoutes);

// Ruta para la página principal que devuelve un mensaje de bienvenida.
app.get("/", (req, res) => {
    res.send("Wellcome to my Api");
});

// Se establece la conexión con la base de datos MongoDB utilizando la URI proporcionada en el archivo .env.
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MONGODB ATLAS")) // Si se conecta correctamente, se muestra un mensaje.
    .catch((error) => console.error(error)); // Si hay un error de conexión, se muestra en la consola.

// Se inicia el servidor para escuchar en el puerto definido.
app.listen(port, () => console.log("Server Listening on port", port));
