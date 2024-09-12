const express = require('express');
const horaireController = require('../controllers/horaireController');

const router = express.Router();

router.get('/', horaireController.getAllHoraire);
router.get('/:id', horaireController.getHoraireById);
router.get('/:heure', horaireController.getHoraireByHeure);
router.post('/', horaireController.createHoraire);
router.put('/:id', horaireController.updateHoraire);
router.delete('/:id', horaireController.deleteHoraire);

module.exports = router;
