module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    token_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  User.associate = (models) => {
    User.hasMany(models.SubscribedCurrency, {
      foreignKey: 'userId',
      as: 'subscribedCurrencies'
    })
  }
  return User
}
