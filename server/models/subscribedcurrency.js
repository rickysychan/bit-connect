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
    SubscribedCurrency.belongsToMany(models.User, {
      through: 'UserCurrency',
      as: 'User',
      foreignKey: 'userId'
    })
  }
  return SubscribedCurrency
}
