const express = require('express');
const router = express.Router();
const pacientesControllers = require('../controllers/pacientesControllers')

module.exports = function() {

    // Agregar nuevos pacientes vía POST.

    router.post('/pacientes',  pacientesControllers.nuevoCliente)

    // Obtener todos los registros de la base de datos.

    router.get('/pacientes', pacientesControllers.obtenerPacientes)

    //obtiene un paciente en espefícico

    router.get('/pacientes/:id', pacientesControllers.obtenerPaciente)


    // Actualizar un registro con un ID específico.

    router.put('/pacientes/:id', pacientesControllers.actualizarPaciente)
    
    router.delete('/pacientes/:id', pacientesControllers.eliminarPaciente)
    
    
    return router;
}