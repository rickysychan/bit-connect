const User = require('../models').User
const subscribedcurrency = require('../models').SubscribedCurrency

module.exports = {
  list (req, res) {
    return User
      .findAll()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error))
  },
  retrieve (req, res) {
    return User
      .findOne({
        where: {
          token_id: req.params.token_id
        },
        include: [{
          model: subscribedcurrency
        }]
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found'
          })
        }
        return res.status(200).send(user)
      })
      .catch(error => res.status(400).send(error))
  },
  create (req, res) {
    return User
      .create({
        token_id: req.body.token_id,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error))
  }
}
