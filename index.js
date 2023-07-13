const express = require("express");
const app = express();
const port = 8080;

const controllers = require("./controllers/controllers");
const dataBase = require('./utils/db');
const userControllers = require('./controllers/userControllers');

// se hace el test de conexión la base de datos
const testConex = async () => {
  try {
    await dataBase.authenticate(); // el metodo authenticate es un metodo propio de sequelize
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
// get


app.use((req, res, next) => {
  console.log("Se ejecutó un nueva consulta a un endpoint");
  next();
});
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/mensaje", controllers.emitirMensaje);
app.get("/lista-usuarios", controllers.mensajeListaUsuarios);
app.get("/nueva-ruta", controllers.nuevaConsulta);
app.get("/user-detail/:name/:lastname", controllers.userDetail);
app.get("/getallusers", userControllers.getAllUsers);
app.get("/userdetail/:id", userControllers.userDetail)

app.post("/createuser", userControllers.createUser);
app.delete("/deleteuser/:id", userControllers.deleteUser)

app.put("/updateuser/:id", userControllers.updateUser);


  try {
    testConex();
    app.listen(port, console.log(`Server running on port ${port}`));
  } catch (error) {
    console.log("Ocurrio un error al inicializar el server", error);
  }
