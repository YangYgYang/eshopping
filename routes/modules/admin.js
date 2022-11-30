const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')


router.post('/api/product',adminController.postProduct)
router.put('/api/product/:id',adminController.putProduct)
router.delete('/api/product/:id',adminController.deleteProduct)


module.exports = router
