var express = require('express');
var router = express.Router();
var visitanteController = require('../src/controller/visitanteController');

router.get('/',visitanteController.getAll);
router.get('/:id',visitanteController.getById);
router.post('/',visitanteController.create);
router.put('/:id',visitanteController.update);
router.delete('/:id',visitanteController.remove);

module.exports = router;