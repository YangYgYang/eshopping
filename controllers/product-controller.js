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
        if (!name) throw new Error('Product name is required!')
        return products.create({
            name:name,
            price:price
        })
        .then(() => {
            res.status(201)
        })
        .catch(err => console.log(err))
    },
    putProduct:(req, res, next) => {

    },
    deleteProduct:(req, res, next) => {

    },

}


module.exports = productController