const express = require('express');
const router = express.Router();

const {MenuControl} = require('../controller/controller.js');

//menu
router.get('/', MenuControl.showMenu)

//add data by form ejs
router.get('/add', MenuControl.requestMenu)
// router.post('/add', MenuControl.saveRequest)

//req.params by id delete
// router.get('/:id/delete', MenuControl.deleteRequest)

module.exports = router;