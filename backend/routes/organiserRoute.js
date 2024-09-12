const express = require('express');
const organiserRoute = require('../controllers/organiserController');

const router = express.Router();

router.get('/', organiserRoute.getAllCalendrier);
router.get('/:id', organiserRoute.getCalendrier);
router.post('/', organiserRoute.createCalendrier);
router.put('/:id', organiserRoute.updateCalendrier);
router.delete('/:id', organiserRoute.deleteCalendrier);

module.exports = router;
