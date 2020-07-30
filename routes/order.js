const express = require('express');
const router = express.Router();

const {OrderControl} = require('../controller/controller.js');

//Order
router.get('/', OrderControl.showAllOrder)

//add data by form ejs
router.get('/input', OrderControl.addOrder)

router.get('/:id/delete', OrderControl.deleteOrder)

router.get('/complete', OrderControl.completeOrder)
module.exports = router;
