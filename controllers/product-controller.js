const { Op } = require("sequelize")
const { Products,categories } = require('../models')
const { body, validationResult } = require('express-validator')

const productController = {
    getProducts:async(req, res, next) => {
        const ParamPageSize = req.query.pageSize*1 || 12
        const ParamPage = req.query.page*1 || 1
        const ParamCategory = Number(req.query.categoryId) || ''
        const state = {}
        const page = {}
        if(ParamCategory){
            return categories.findByPK(ParamCategory)
        }
        if( req.query.kind === "newest" ){
            //though we only need to order by one column, we still need to put the ordering array inside the order array
            state.order = [['createdAt', 'DESC']]
        }else if(req.query.kind === "oldest"){
            state.order = [['createdAt', 'ASC']]
        }else if(req.query.kind === "cheapest"){
            state.order = [['price', 'ASC']]
        }else if(req.query.kind === "mostExpensive"){
            state.order = [['price', 'DESC']]
        }else if( req.query.kind === "onSale" ){
            state.where = {discount:{[Op.lt]:10}}
        }else if( req.query.kind === "hotSale"){
            state.order = [['sales', 'DESC']]
        }

        const count = await Products.count(state)
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

        return Products.findAll(state)
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
        const ParamProduct = req.query.id
        return Products.findByPK(ParamProduct)
        .then((product)=>{
            console.log(product)
            res.status(200).json({
                product
        })})
        .catch(err => {
            res.status(401).json({
            message: err
        })})
    }
}


module.exports = productController