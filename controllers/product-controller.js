const { Op } = require("sequelize")
const { Products,Categories } = require('../models')
const { body, validationResult } = require('express-validator')

const productController = {
    getProducts:async(req, res, next) => {
        const ParamPageSize = req.query.pageSize*1 || 12
        const ParamPage = req.query.page*1 || 1
        const ParamCategory = Number(req.query.categoryId) || ''
        const state = {}
        const page = {}
        if(ParamCategory){
            return Categories.findByPK(ParamCategory)
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
    getProduct: async(req, res, next) => {
        const ParamProduct = req.params.id
        try{
            //findByPk不知道為何不行
            const product = await Products.findOne({where:{id:ParamProduct}})
            res.status(200).json({
                product
            })

        }
        catch (err) { next(err) }
    },
    //拿到分類系列的所有產品
    getCategoryProduct: async(req, res, next) => {
        const ParamCategory = req.params.id
        let productData
        let selectCategory = []
        try{
            const category = await Categories.findOne({
                nest: true,
				raw: true,
                where:{id:ParamCategory}
            })
            //若為第一層(父層)分類的話
            if(category.parent_id === 0){
                const categoryChild = await Categories.findAll({
                    nest: true,
                    raw: true,
                    where:{parent_id:ParamCategory}
                })

                //將選擇到的父層類別之下所有子類別的id拿出來，後面要用此陣列找products
                for(let i = 0; i<categoryChild.length;i++){
                        selectCategory.push({category_id:categoryChild[i].id})
                }

                const product = await Products.findAll({
                    nest: true,
                    raw: true,
                    where: {
                        [Op.or]: selectCategory
                }})
                productData = product
            } else {
                const product = await Products.findAll({
                    nest: true,
                    raw: true,
                    where:{category_id:ParamCategory}
                })
                productData = product
            }
            res.status(200).json({
                productData
            })
        }
        catch (err) { next(err) }
    }
}


module.exports = productController