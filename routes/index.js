var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'views'});
});

router.post('/registro', function(req, res, next) {
  console.log(req.body);
  fs.writeFile('registro.json', JSON.stringify(req.body), function(err) {
    if (err) {
      console.error('Error:', err);
      res.status(500).send('Hubo un error al guardar el registro');
      return;
    }
  });
  res.send('Registro exitoso');
}
);

module.exports = router;
