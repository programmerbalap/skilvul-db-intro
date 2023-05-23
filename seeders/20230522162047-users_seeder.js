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
      'users',
      [
        {
          name: 'subhan',
          email: 'subhan@gmail.com',
          password: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'alif',
          email: 'alif@gmail.com',
          password: '123',
          rule: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'salsa',
          email: 'salsa@gmail.com',
          password: '123',
          rule: 2,
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
    await queryInterface.bulkDelete('users', null, {});
  },
};
