'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Menu.belongsToMany(models.Resto, {through: models.Order})
    }

    randomRecomendation(){
      let x = Math.floor((Math.random() * 2) + 1)
      if(x%2 == 0){
        return `(Chef's Favorite)`
      } else {
        return `(Customer Love It)`
      }
    }

  };
  Menu.init({
    menu: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};