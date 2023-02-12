const { Op } = require("sequelize")
const { Products,Categories } = require('../models')

const categoryController = {
    getCategories: async(req, res, next) => {
        try{
            console.log('是不是分類有進')
            const categories = await Categories.findAll()
            console.log(categories)
            return res.status(200).json(categories)
        }
        catch (err) { next(err) }
        
}}


module.exports = categoryController