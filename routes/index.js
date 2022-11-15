const express = require('express')
const router = express.Router()
const productController = require('../controllers/product-controller')
const admin = require('./modules/admin')

router.use('/admin', admin)

router.get('/api/products',productController.getProducts)
router.get('/api/product/newest',productController.getNewestProducts)
router.get('/api/products/onSale',productController.getOnSaleProducts)
router.get('/api/products/hotSale',productController.getHotSaleProducts)
router.get('/api/product/:id',productController.getProduct)
router.post('/api/product/:id',productController.postProduct)
router.put('/api/product/:id',productController.putProduct)
router.delete('/api/product/:id',productController.deleteProduct)


module.exports = router