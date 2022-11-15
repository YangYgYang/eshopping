const { User } = require('../models')

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
        const { name, price, short_des, discount, description, categoryId } = req.body
        if (!name) throw new Error('Restaurant name is required!')

    },
    putProduct:(req, res, next) => {

    },
    deleteProduct:(req, res, next) => {

    },

}


module.exports = productController