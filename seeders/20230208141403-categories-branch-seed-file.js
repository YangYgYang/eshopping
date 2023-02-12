'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    const categoriesSeed =[
      {
        name: '乳液',
        img: null,
        parent_id: 0,
        sort: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '粉底液',
        img: null,
        parent_id: 1,
        sort: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '擴香瓶',
        img: null,
        parent_id: 2,
        sort: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '沐浴乳',
        img: null,
        parent_id: 3,
        sort: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '各式刷具',
        img: null,
        parent_id: 4,
        sort: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '控油洗面乳',
        img: null,
        parent_id: 5,
        sort: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
    ]
    await queryInterface.bulkInsert('categories', categoriesSeed)
  },

  down: async(queryInterface, Sequelize) => {
		const { sequelize } = queryInterface
		try {
			await sequelize.transaction(async transaction => {
				const options = { transaction }
				await sequelize.query('TRUNCATE TABLE categories', options)
			})
		} catch (error) {
			console.log(error)
		}
  }
};
