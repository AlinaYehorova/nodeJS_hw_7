'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('App',{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      size: {
       type: Sequelize.INTEGER,
       allowNull: false ,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('App');
  }
};
