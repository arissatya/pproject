'use strict';

let seed = require('../json-data/allmenu.json')
seed.map(el=>{
  el.createdAt = new Date()
  el.updatedAt = new Date()

  return el
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ListMenus', seed, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ListMenus', seed, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
