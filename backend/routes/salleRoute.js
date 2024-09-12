const express = require('express');
const SalleCtrl = require('../controllers/salleController')
const router = express.Router();

router.post('/', SalleCtrl.createSalle)
router.get('/', SalleCtrl.getAllSalle)
router.get('/search/:id', SalleCtrl.getSalle)
router.patch('/:id', SalleCtrl.updateSalle)
router.delete('/:id', SalleCtrl.deleteSalle)

module.exports = router