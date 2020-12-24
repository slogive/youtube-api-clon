module.exports = (app) => {
  const customers = require('../controllers/videos.controller.js');

  // retrieve a todos los valores
  app.get('/videos', customers.findAll);

  // retrieve a un solo valor
  app.get('/videos/:id', customers.findOne);
};
