const {products} = require('../models')
const {body,validationResult} = require('express-validator')

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
    postProduct: async (req, res, next) => {
        const { name, price, short_des, discount, description, category_id} = req.body
        // console.log(req.body)
        // console.log(typeof name ,typeof price ,typeof short_des,typeof discount,typeof description,typeof category_id)
        // console.log(typeof name !== 'string')
        // console.log('巴底是字串嗎',body("name").isString())
        // console.log(typeof price !== Number)
        // console.log(typeof short_des !== String)
        // console.log(typeof discount !== Number)
        // console.log(typeof description !== String)
        // console.log(typeof category_id !== Number)
        if(!name || !price){
             return res
            .status(401)
            .json({
                message: 'Request have wrong format!',
            })
            .end()
        }else{
             await products.create({
                name,
                price,
                short_des,
                discount,
                description,
                category_id,
            })
            .then(() => {
                res
                .status(200)
                .json({
                    message: 'Create product success!',
                })
                .end()
            })
            .catch(err => 
                res
                .status(401)
                .json({
                    message: err,
                })
                .end())
        }
    },
    putProduct:(req, res, next) => {

    },
    deleteProduct:(req, res, next) => {

    },

}


module.exports = productController