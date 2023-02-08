'use strict';

module.exports = {
  up:async(queryInterface, Sequelize) => {
    const categoriesSeed =[
      {
        name: '茶樹保濕乳液',
        price: 600,
        short_des: '保濕好用',
        discount: 0.8,
        description:'推薦調理乳液一起使用，效果佳',
        category_id:2,
        sales:2,
        img:null,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '平衡調理乳液',
        price: 800,
        short_des: '受損肌膚使用',
        discount: 1,
        description:'先使用茶樹保濕，再使用調理乳液',
        category_id:2,
        sales:5,
        img:null,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '三色遮瑕膏',
        price: 1020,
        short_des: '三個顏色，完美遮瑕',
        discount: 0.9,
        description:'遮你的黑眼圈',
        category_id:3,
        sales:2,
        img:'',
        created_at: new Date(),
        updated_at: new Date()
      },
      // {
      //   name: '乳液',
      //   price: null,
      //   short_des: 0,
      //   discount: 1,
      //   description:'',
      //   category_id:2,
      //   sales:2,
      //   img:'',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   name: '乳液',
      //   price: null,
      //   short_des: 0,
      //   discount: 1,
      //   description:'',
      //   category_id:2,
      //   sales:2,
      //   img:'',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   name: '乳液',
      //   price: null,
      //   short_des: 0,
      //   discount: 1,
      //   description:'',
      //   category_id:2,
      //   sales:2,
      //   img:'',
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
    ]
    await queryInterface.bulkInsert('categories', categoriesSeed)
  },

  down: async(queryInterface, Sequelize) => {
		const { sequelize } = queryInterface
		try {
			await sequelize.transaction(async transaction => {
				const options = { transaction }
				await sequelize.query('TRUNCATE TABLE products', options)
			})
		} catch (error) {
			console.log(error)
		}
  }
};
