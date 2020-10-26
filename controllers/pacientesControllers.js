const Paciente = require("../models/Paciente");
// Cuando se crea un nuevo clinte

exports.nuevoCliente = async (req, res, next) => {
  //todo: insertar a la base de datos.

  // Crear objeto de paciente con datos de req.body

  const paciente = new Paciente(req.body);

  console.log(paciente);

  try {
    await paciente.save();
    res.json({
      mensaje: "El cliente se agregó correctamente",
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.obtenerPacientes = async (req, res, next) => {
  try {
    const pacientes = await Paciente.find({});
    res.json(pacientes);
  } catch (error) {
    console.log(error);
    next();
  }
};

//obtiene un paciente en específico por ID

exports.obtenerPaciente = async (req, res, next) => {

    try {
        const paciente = await Paciente.findById(req.params.id);
        res.json(paciente);
} catch (error) {
    console.log(error)

    next();
}

}

exports.actualizarPaciente = async(req, res, next) => {
    try {
        const paciente = await Paciente.findByIdAndUpdate({_id: req.params.id}, req.body, {
            new: true
        });
        res.json(paciente);
    } catch(error) {
        console.log(error)
        next();
    }
}

exports.eliminarPaciente = async(req, res, next) => {
    try {
         await Paciente.findByIdAndDelete({_id: req.params.id})
        res.json('El paciente fue eliminado')
    } catch (error) {
        console.log(error)

    }
}

