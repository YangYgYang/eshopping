const express = require('express')
const router = express.Router()
const productController = require('../controllers/product-controller')
const categoryController = require('../controllers/category-controller')
const admin = require('./modules/admin')
const { userAuthenticated, userLoginAuth ,admintokenAuthenticated} = require('../middleware/auth')

router.use('/admin', admin)

//***需登入會員才可瀏覽之頁面
//post留言
//post結帳(訂單快照)就要開始擋
//post確認訂單(第2層訂單快照？)也要擋
//get會員id也要擋
//get會員id歷史評論＆歷史訂單也要擋

//一般瀏覽頁面，不用擋驗證即可瀏覽
router.get('/api/products/category/:id',productController.getCategoryProduct)
router.get('/api/products',productController.getProducts)
router.get('/api/product/:id',productController.getProduct)
router.get('/api/categories/:type',categoryController.getCategories)
router.get('/',(req,res)=>{res.json({"message":"successful"})})


module.exports = router