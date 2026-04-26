var express = require('express');
var router = express.Router();
var router = express.Router();
var vistaController = require('../controller/visitanteController');



router.get('/', citaController.getAll);
router.get('/:id', citaController.getById);
router.post('/', citaController.create);
router.put('/:id', citaController.update);
router.delete('/:id', citaController.remove);

module.exports = router;