'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //sort 要怎麼排序，有main和branch，排序是他可以排是第幾個，但我從資料庫可以抓回來降冪排列就好
  const categoriesSeed =[
    {
      name: '保養系列',
			img: null,
			parent_id: 0,
			sort: 1,
			created_at: new Date(),
			updated_at: new Date()
    },
    {
      name: '彩妝係列',
			img: null,
			parent_id: 0,
			sort: 2,
			created_at: new Date(),
			updated_at: new Date()
    },
    {
      name: '香氛係列',
			img: null,
			parent_id: 0,
			sort: 3,
			created_at: new Date(),
			updated_at: new Date()
    },
    {
      name: '身體髮品',
			img: null,
			parent_id: 0,
			sort: 4,
			created_at: new Date(),
			updated_at: new Date()
    },
    {
      name: '美妝工具',
			img: null,
			parent_id: 0,
			sort: 5,
			created_at: new Date(),
			updated_at: new Date()
    },
    {
      name: '男士保養',
			img: null,
			parent_id: 0,
			sort: 6,
			created_at: new Date(),
			updated_at: new Date()
    },
  ]
  // const categoriesName = ['保養係列','彩妝系列','香氛系列','身體髮品','美妝工具','男士保養']
  //   const categoriesSeed = Array.from({length:6},async ()=>({
  //     name: categoriesName,
	// 		img: null,
	// 		parent_id: 0,
	// 		sort: 'root',
	// 		created_at: new Date(),
	// 		updated_at: new Date()
  // }))
		await queryInterface.bulkInsert('categories', categoriesSeed)
  },

  down: async(queryInterface, Sequelize) => {
		// const { sequelize } = queryInterface
		// try {
		// 	await sequelize.transaction(async transaction => {
		// 		const options = { transaction }
		// 		await sequelize.query('TRUNCATE TABLE Categories', options)
		// 	})
		// } catch (error) {
		// 	console.log(error)
		// }
  }
};
