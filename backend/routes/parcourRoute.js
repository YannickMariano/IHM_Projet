const express = require('express');
const parcourController = require('../controllers/parcourController');

const router = express.Router();

router.get('/', parcourController.getAllParcours);
router.get('/:id', parcourController.getParcours);
router.post('/', parcourController.createParcours);
router.put('/:id', parcourController.updateParcours);
router.delete('/:id', parcourController.deleteParcours);

module.exports = router;
