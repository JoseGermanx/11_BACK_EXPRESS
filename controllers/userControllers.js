const Usuarios = require("../models/userModel");

//accediendo al modelo Usuarios y creando uno nuevo
// POST
const createUser = async (req, res) => {
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;

  if (!nombre || !apellido) {
    return res.status(400).json({ msg: "Faltan datos en tu petición" });
  } else {
    await Usuarios.create({
      nombre: nombre,
      apellido: apellido,
    });
    res.status(200).json({ mensaje: "Usuario creado con exito" });
    console.log("Usuario creado exitosamente");
  }
};

// listar los elementos de la tabla usuarios
//GET
const getAllUsers = async (req, res) => {
  try {
    const lista = await Usuarios.findAll();
    res.status(200).json(lista);
  } catch (error) {
    res.status(400).json({ msg: error });
  }

  //console.log(JSON.stringify(lista));
};

// actualizar un recurso en la base de datos
// PUT
// const idConsultada = 2; // desde la ruta en la api, desde una fomulario, etc
const updateUser = async (req, res) => {
  const idConsultada = req.params.id;
  const nombreNuevo = req.body.nombre;
  const apellidoNuevo = req.body.apellido;
  //buscamos si el usuario con el id recibido existe en la BD
  const userId = await Usuarios.findAll({
    where: {
      id: idConsultada,
    },
  });

  // si el usuario existe se ejecuta la actualización // si no, se envia mensaje de error
  if (userId.length === 1) {
    await Usuarios.update(
      { nombre: nombreNuevo,
        apellido: apellidoNuevo
       },
      { where: { id: idConsultada } }
    );
    res.status(200).json({ msg: "Registro actualizado" });
    console.log("Registro actualizado correctamente");
  } else {
    res.status(400).json({ msg: "Usuario no existe" });
    console.log("Usuario no existe");
  }
};

//eliminar un registro de la base de datos
// DELETE
const deleteUser = async (req, res) => {
  const idConsultada = req.params.id;
  //buscamos si el usuario con el id recibido existe en la BD
  const userId = await Usuarios.findAll({
    where: {
      id: idConsultada,
    },
  });
  // si el usuario existe se ejecuta la eliminacion // si no, se envia mensaje de error
  if (userId.length === 1) {
    await Usuarios.destroy({ where: { id: idConsultada } });
    res.status(200).json({ msg: "Registro borrado correctamente" });
    console.log("Registro borrado correctamente");
  } else {
    res.status(400).json({ msg: "El usuario que intentas eliminar no existe" });
    console.log("El usuario que intentas eliminar no existe");
  }
};

//GET (obtener detalle de 1 usuario)

const userDetail = async (req, res) => {
  const userId = req.params.id;

  const idOnDb = await Usuarios.findOne({ where: { id: userId } });
  if (idOnDb === null) {
    res
      .status(400)
      .json({ msg: "El id de usuario no existe en la base de datos." });
  } else {
    const user = await Usuarios.findAll({ where: { id: userId } });
    res.status(200).json(user);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  userDetail,
};

//CREATE
//READ (get)
//UPDATE
//DELETE

//CRUD