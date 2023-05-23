'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'company_kind',
      [
        {
          nama: 'Logistik',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: 'Konsultan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: 'F&B',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: 'Usaha Dagang',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: 'Teknologi Informasi',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('company_kind', null, {});
  },
};
