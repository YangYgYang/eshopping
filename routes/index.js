const express = require('express')
const router = express.Router()
const productController = require('../controllers/product-controller')
const admin = require('./modules/admin')

router.use('/admin', admin)

router.get('/api/products',productController.getProducts)
router.get('/api/product/:id',productController.getProduct)


module.exports = router