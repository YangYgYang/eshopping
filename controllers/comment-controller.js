const { Op } = require("sequelize")
const { Products,Categories, Comments} = require('../models')

const commentController = {
    getComments: async (req, res, next) =>{
        const productId = req.query.product_id
        const productComment = await Comments.findAll({
            nest: true,
            raw: true,
            where:{ product_id:productId }
        })
        res.status(200).json(
            productComment
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