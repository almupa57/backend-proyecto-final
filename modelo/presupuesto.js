const mongoose = require('mongoose');
const {Schema}= mongoose;

const PresupuestoSchema = new Schema({
    nombreEmpresa: String,
    nit: Number,
    tomaCant: Number,
    puToma: Number,
    cantidadLuces: Number,
    puLuces: Number,
    puInterruptores: Number,
    cantidadInterruptores: Number,
    tipoVivienda: String,
    total: Number
})
module.exports=mongoose.model('Presupuesto', PresupuestoSchema)