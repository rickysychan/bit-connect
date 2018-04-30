module.exports = (sequelize, DataTypes) => {
  var SubscribedCurrency = sequelize.define('SubscribedCurrency', {
    symbol: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    priceAtSubscription: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  SubscribedCurrency.associate = (models) => {
    SubscribedCurrency.hasMany(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  }
  return SubscribedCurrency
}
