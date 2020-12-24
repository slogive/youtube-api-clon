const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse de los datos traidos en json - application/json
app.use(bodyParser.json());

// parse encoding
app.use(bodyParser.urlencoded({ extended: true }));

// Index
app.get('/', (req, res) => {
  res.json({
    message:
      'Bienvenido a la API de test para el proyecto de Youtube. | Slogive',
    status: 200,
  });
});

require('./app/routes/videos.routes.js')(app);

// port, listening
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto: ${PORT}.`);
});
