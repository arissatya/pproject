const express = require('express');
const router = express.Router();

const {Controller} = require('../controller/controller.js');

const menu = require('../routes/menu.js')
const order = require('../routes/order.js')
const resto = require('../routes/resto.js')

//ROOT
router.get('/', Controller.rootPage)

router.use('/menu', menu)
router.use('/order', order)
router.use('/resto', resto)

module.exports = router;