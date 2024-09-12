const express = require('express');
const ProfCtrl = require('../controllers/profController')
const router = express.Router();

router.post('/', ProfCtrl.createProf)
router.get('/', ProfCtrl.getAllProf)
router.get('/:id', ProfCtrl.getProf)
router.patch('/:id', ProfCtrl.updateProf)
router.delete('/:id', ProfCtrl.deleteProf)
router.post('/login', ProfCtrl.proflogin)
router.post('/signup', ProfCtrl.profsignup)

module.exports = router