const express = require('express');
const niveauController = require('../controllers/niveauController');

const router = express.Router();

router.get('/', niveauController.getAllNiveau);
router.get('/:id', niveauController.getNiveau);
router.post('/', niveauController.createNiveau);
router.put('/:id', niveauController.updateNiveau);
router.delete('/:id', niveauController.deleteNiveau);

module.exports = router;
