'use strict';

module.exports = {
  up:async(queryInterface, Sequelize) => {
    const categoriesSeed =[
      {
        name: '茶樹保濕乳液',
        price: 600,
        short_des: '保濕好用',
        discount: 80,
        description:'推薦調理乳液一起使用，效果佳',
        // category_id:2,
        sales:2,
        img:null,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '平衡調理乳液',
        price: 800,
        short_des: '受損肌膚使用',
        discount: 80,
        description:'先使用茶樹保濕，再使用調理乳液',
        // category_id:2,
        sales:5,
        img:null,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '三色遮瑕膏',
        price: 1020,
        short_des: '三個顏色，完美遮瑕',
        discount: 90,
        description:'遮你的黑眼圈',
        // category_id:3,
        sales:2,
        img:'',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '唇蜜',
        price: 450,
        short_des: "保濕柔亮，讓你擁有好氣色",
        discount: 100,
        description:'獨一無二的極致舒適質地打造柔嫩彈潤的雙唇，10 小時持續有感。黑漆亮面漸層管身，搭配半透明細節設計，透出管內誘人色澤。同步推出 20 款',
        // category_id:2,
        sales:8,
        img:'',
        created_at: new Date(),
        updated_at: new Date()
      },
    ]
    await queryInterface.bulkInsert('products', categoriesSeed)
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
