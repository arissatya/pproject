const express = require('express');
const router = express.Router();

const {MenuControl} = require('../controller/controller.js');

//menu
router.get('/', MenuControl.showMenu)

router.get('/order/:makanan', MenuControl.OrderMenu)


module.exports = router;