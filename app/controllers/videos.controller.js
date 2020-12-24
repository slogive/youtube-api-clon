const Videos = require('../models/videos.model.js');

// Llama todos los datos de la base de datos
exports.findAll = (req, res) => {
  Videos.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          `Un error ocurrio cuando recolectavamos los datos de: 'videos'.`,
      });
    else res.send(data);
  });
};

// Busca un solo resultado por id en la base de datos
exports.findOne = (req, res) => {
  Videos.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `No se encontro el video con la id: '${req.params.id}'.`,
        });
      } else {
        res.status(500).send({
          message:
            'Error al momento de recibir el valor de la id: ' + req.params.id,
        });
      }
    } else res.send(data);
  });
};
