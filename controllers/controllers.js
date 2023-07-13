
const emitirMensaje = (req, res) =>  res.send("Hola mundo, este es un mensaje desde el controlador");

const mensajeListaUsuarios = ( req, res) => res.send("En esta ruta tendremos la lista de usuarios");

const nuevaConsulta = (req, res) => res.send("Nueva ruta consulta");

const userDetail = (req, res) => res.send(req.params); //objeto

module.exports = {
    emitirMensaje,
    mensajeListaUsuarios,
    nuevaConsulta,
    userDetail
};