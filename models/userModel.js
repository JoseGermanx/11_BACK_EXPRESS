// modelo de la tabla usuarios creada en zequelize

const { Model, DataTypes } = require("sequelize");
const dataBase = require("../utils/db");

//definición del modelo (abstracción de la tabla)
const Usuarios = dataBase.define(
  "Usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: DataTypes.TEXT,
    apellido: DataTypes.TEXT,
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);
//comprobar que el modelo se creó correctamente
//console.log(Usuarios === dataBase.models.Usuarios);
module.exports = Usuarios;


