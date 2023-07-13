const { Sequelize } = require("sequelize"); 

const sequelize = new Sequelize("nueva_base", "root", "", {
    host: "localhost",
    dialect: "mysql", 
  });

  module.exports = sequelize;