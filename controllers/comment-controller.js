const { Op } = require("sequelize")
const { Products,Categories, } = require('../models')

const commentController = {
    getComments:(req, res, next) =>{
        const productId = req.params.product_id
        console.log(productId)
        res.status(200).json(
            'product'
        )
    },
    postComments:(req, res, next) =>{
        const productId = req.params.product_id
        res.status(200).json(
            'product'
        )
    },
}




module.exports = commentController