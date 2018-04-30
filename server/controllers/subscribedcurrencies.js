const SubscribedCurrency = require('../models').SubscribedCurrency

module.exports = {
  list (req, res) {
    return SubscribedCurrency
      .findAll()
      .then(subscribedCurrency => res.status(200).send(subscribedCurrency))
      .catch(error => res.status(400).send(error))
  },
  create (req, res) {
    return SubscribedCurrency
      .create({
        name: req.body.name,
        symbol: req.body.symbol,
        priceAtSubscription: req.body.priceAtSubscription,
        userId: req.params.token_id
      })
      .then(subscribedCurrency => res.status(201).send(subscribedCurrency))
      .catch(error => res.status(400).send(error))
  }
}
