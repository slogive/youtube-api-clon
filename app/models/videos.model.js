const sql = require('./db.js');

// constructor
const Videos = function () {};

Videos.findById = (id, result) => {
  sql.query(`SELECT * FROM youtube WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log('error: ', err);
      // result(err, null);
      result('Hola', null);
      return;
    }

    if (res.length) {
      console.log('found video: ', res[0]);
      result(null, res[0]);
      return;
    }

    // No se encuentra el video con la 'id'
    result({ kind: 'not_found' }, null);
  });
};

Videos.getAll = (result) => {
  sql.query('SELECT * FROM youtube', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    console.log('youtube: ', res);
    result(null, res);
  });
};

module.exports = Videos;
