'use strict';
const { Products } = require('../models')
const faker = require('@faker-js/faker')

module.exports = {
  up: async(queryInterface, Sequelize) => {
    console.log('最前')
      const productData = await Products.findAll(
        { 
          nest: true,
          raw: true,
          attributes:['id']
      }
      )
      console.log('二',productData)
      const commentSeed = []
      console.log('三')
      for(let i = 1;i<11;i++){
        commentSeed.push({
          content: '222',
          score: Math.round(Math.random() * 4 + 1),
          created_at: new Date(),
          updated_at: new Date(),
          product_id: productData[Math.round(Math.random() * productData.length)].id
        })
      }
      console.log('await前')
      await queryInterface.bulkInsert('comments',commentSeed)

  },

  down: async(queryInterface, Sequelize) => {
		const { sequelize } = queryInterface
		try {
			await sequelize.transaction(async transaction => {
				const options = { transaction }
				await sequelize.query('TRUNCATE TABLE comments', options)
			})
		} catch (error) {
			console.log(error)
		}
  }
};
