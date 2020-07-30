'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListMenu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ListMenu.belongsTo(models.Resto, {
        foreignKey: 'RestoId',
        targetKey: 'id'
      })
      // define association here
    }
  };
  ListMenu.init({
    RestoId: DataTypes.INTEGER,
    makanan: DataTypes.STRING,
    harga: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ListMenu',
  });
  return ListMenu;
};