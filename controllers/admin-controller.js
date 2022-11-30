const { Op } = require("sequelize")
const { products } = require('../models')
const { body, validationResult } = require('express-validator')

const adminController = {
    postProduct: async (req, res, next) => {
        const { name, price, short_des, discount, description, category_id } = req.body
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


module.exports = adminController