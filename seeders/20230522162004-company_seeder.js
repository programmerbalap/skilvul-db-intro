'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      'company',
      [
        {
          nama: 'PT. Cahaya Baru',
          nama_pemilik: 'Cahyadi',
          alamat: 'JL. Rengginang No.13200 MP Jombang Jatim',
          jenis_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: 'PT. Prima Jaya',
          nama_pemilik: 'Handoko',
          alamat: 'JL. Pelita No.12310 MJP Jember Jatim',
          jenis_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('company', null, {});
  },
};
