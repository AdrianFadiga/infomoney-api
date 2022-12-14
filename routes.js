const router = require('express').Router()
const controller = require('./controller')

router.get('/stocks/:stockCode', controller.getByStockCode)

router.get('/stocks', controller.getTickers)

module.exports = router
