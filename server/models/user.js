module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    token_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: 1,
          msg: 'Name must be atleast 3 characters in length'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: 1,
          msg: 'Name must be atleast 3 characters in length'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: 1,
          msg: 'Name must be atleast 3 characters in length'
        }
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: 1,
          msg: 'Name must be atleast 3 characters in length'
        }
      }
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
