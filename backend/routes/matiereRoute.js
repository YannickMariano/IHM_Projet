const express = require('express');
const matiereController = require('../controllers/matiereController');

const router = express.Router();

router.get('/', matiereController.getAllMatiere);
router.get('/:id', matiereController.getMatiere);
router.post('/', matiereController.createMatiere);
router.put('/:id', matiereController.updateMatiere);
router.delete('/:id', matiereController.deleteMatiere);

module.exports = router;
