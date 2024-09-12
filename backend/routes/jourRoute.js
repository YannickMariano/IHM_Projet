const express = require('express');
const jourController = require('../controllers/jourController');

const router = express.Router();

router.get('/list/', jourController.getAllJour);
router.get('/search/:id', jourController.getJourById);
router.post('/create/', jourController.createJour);
router.put('/update/:id', jourController.updateJour);
router.delete('/delete/:id', jourController.deleteJour);

module.exports = router;
