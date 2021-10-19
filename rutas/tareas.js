const express = require('express')
const rutas= express.Router();


const Presupuesto = require('../modelo/presupuesto');
const PresupuestoController = require('../controlador/presupuestoController');


rutas.post('/presupuesto', 

  PresupuestoController.crearPresupuesto
);

rutas.get('/presupuesto/:nit',

  PresupuestoController.getPresupuestos
)

module.exports = rutas;
  