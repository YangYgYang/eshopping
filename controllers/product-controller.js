const { Op } = require("sequelize")
const { products } = require('../models')
const { body, validationResult } = require('express-validator')

const productController = {
    getProducts:async(req, res, next) => {
        const ParamKind = req.query.kind
        const ParamPageSize = req.query.pageSize*1 || 12
        const ParamPage = req.query.page*1 || 1
        const state = {}
        const page = {}
        if( ParamKind === "newest" ){
            //though we only need to order by one column, we still need to put the ordering array inside the order array
            state.order = [['createdAt', 'DESC']]
        }else if( ParamKind === "onSale" ){
            state.where = {discount:{[Op.lt]:10}}
        }else if( ParamKind === "hotSale"){
            state.order = [['sales', 'DESC']]
        }
        const count = await products.count(state)
        state.limit = ParamPageSize
        state.offset = (ParamPage-1) * ParamPageSize

        page.pageSize = ParamPageSize
        page.page = ParamPage
        page.totalRecord = count

        if(count%ParamPageSize > 0){
            page.pageTotal = Math.floor(count/ParamPageSize) + 1
        }else{
            page.pageTotal = count/ParamPageSize
        }

        return products.findAll(state)
        .then(async(products)=>{
            const data = []
            products.map((product)=>{
                data.push(product.dataValues)
            })
            res.status(200).json({
                page,
                data
            })
        })
        .catch(err => {
            res.status(401).json({
            message: err
        })})
    },
    getProduct: (req, res, next) => {

    },
    postProduct: async (req, res, next) => {
        const { name, price, short_des, discount, description, category_id } = req.body
        // console.log(req.body)
        // console.log(typeof name ,typeof price ,typeof short_des,typeof discount,typeof description,typeof category_id)
        // console.log(typeof name !== 'string')
        // console.log('巴底是字串嗎',body("name").isString())
        // console.log(typeof price !== Number)
        // console.log(typeof short_des !== String)
        // console.log(typeof discount !== Number)
        // console.log(typeof description !== String)
        // console.log(typeof category_id !== Number)
        if (!name || !price) {
            return res.status(401).json({
                message: 'Request have wrong format!',
            })
        } else {
            await products.create({
                name,
                price,
                short_des,
                discount,
                description,
                category_id,
            })
                .then(() => {
                    res.status(200).json({
                        message: 'Create product success!',
                    })
                })
                .catch(err =>
                    res.status(401).json({
                        message: err
                    }))
        }
    },
    putProduct: (req, res, next) => {

    },
    deleteProduct: (req, res, next) => {

    },

}


module.exports = productController