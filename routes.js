const router = require('express').Router()
const controller = require('./controller')

router.get('/stocks/:stockCode', controller.getByStockCode)

router.get('/carousel', controller.getCarousel)

router.get('/stocks', controller.getStocks)

router.get('/mergeStockTypeId', controller.mergeStockTypeId)

module.exports = router
