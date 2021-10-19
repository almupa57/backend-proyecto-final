const Presupuesto = require('../modelo/presupuesto');


exports.crearPresupuesto = async (req, res) => {    

    console.log(req.body);
    const body = req.body;
    const total =  (body.tomaCant * body.puToma) + (body.cantidadLuces * body.puLuces) +  (body.puInterruptores  * body.cantidadInterruptores  )
      
    const newBody = {
      ...body,
      total: total
    }

    console.log(newBody)
    const datoDB = new Presupuesto(newBody)
    await datoDB.save((err, presupuestoStored) => {
      if (err) {
        res.send(500, {message: 'error al guardar'})
      }

      res.send(200, {presupuesto: presupuestoStored}) 
    });
}

exports.getPresupuestos = async (req, res) => { 
   // const nit = req.body;
    //console.log(req.params.nit);
     try {
        const presupuestos = await Presupuesto.find({ nit: req.params.nit });

        if(presupuestos.length === 0) {
          res.send('vacio');
        }else {
          res.json({ presupuestos });
        }
        //console.log(presupuestos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }  

}
