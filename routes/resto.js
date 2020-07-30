const express = require('express');
const router = express.Router();

const {RestoControl} = require('../controller/controller.js');

//resto
router.get('/', RestoControl.showAllResto)

//add data by form ejs
router.get('/:id', RestoControl.checkResto)
// router.post('/add', RestoControl.saveRequest)

//req.params by id delete
// router.get('/:id/delete', RestoControl.deleteRequest)

module.exports = router;