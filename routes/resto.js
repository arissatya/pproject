const express = require('express');
const router = express.Router();

const {RestoControl} = require('../controller/controller.js');

//resto
router.get('/', RestoControl.showAllResto)

//add data by form ejs
router.get('/:id', RestoControl.checkResto)

module.exports = router;