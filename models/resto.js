'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Resto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Resto.belongsToMany(models.Menu, {through: models.Order})
      Resto.hasMany(models.ListMenu, {
        sourceKey: 'id',
        foreignKey: 'RestoId'
      })
    }
  };
  Resto.init({
    namaResto: DataTypes.STRING,
    menuId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Resto',
  });
  return Resto;
};