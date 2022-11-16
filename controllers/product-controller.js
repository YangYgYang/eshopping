const {products} = require('../models')

const productController = {
    getProducts: (req, res, next) => {
        
        res.json({
            name:"綠茶籽精華",
            price:"1300"
        })
    },
    getNewestProducts:(req, res, next) => {

    },
    getOnSaleProducts:(req, res, next) => {

    },
    getHotSaleProducts:(req, res, next) => {

    },
    getProduct:(req, res, next) => {

    },
    postProduct:(req, res, next) => {
        const { name, price } = req.body
        console.log('看req有什麼',req)
        console.log('看巴底有什麼',req.body)
        // res.status(201)
        if (!name) throw new Error('Product name is required!')
        products.create({
            name,
            price
        })
        .then(() => {
            res.status(201)
        })
    },
    putProduct:(req, res, next) => {

    },
    deleteProduct:(req, res, next) => {

    },

}


module.exports = productController