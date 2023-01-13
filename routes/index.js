const express = require('express')
const router = express.Router()
const productController = require('../controllers/product-controller')
const admin = require('./modules/admin')
const { userAuthenticated, userLoginAuth ,admintokenAuthenticated} = require('../middleware/auth')

router.use('/admin', admin)

router.get('/api/products',productController.getProducts)
router.get('/api/product/:id',productController.getProduct)
router.get('/',(req,res)=>{res.json({"message":"successful"})})


module.exports = router