const { Op } = require("sequelize")
const { Products,Categories } = require('../models')

const categoryController = {
    getCategories: async(req, res, next) => {
        const ParamCategory = req.params.type
        try{
            const categories = await Categories.findAll(
                {
                nest: true,
				raw: true,
                where: { parent_id: ParamCategory }
                }
            )
            return res.status(200).json(categories)
        }
        catch (err) { next(err) }
        
}}


module.exports = categoryController