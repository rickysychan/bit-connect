const usersController = require('../controllers').users
const subscribedCurrenciesController = require('../controllers').subscribedcurrencies

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the bitconnect API!'
  }))

  // subscribed currency controllers
  app.post('/api/user/:token_id/currencies', subscribedCurrenciesController.create)

  // user Controllers
  app.get('/api/user', usersController.list)
  app.get('/api/user/:token_id', usersController.retrieve)
  app.post('/api/user', usersController.create)
}
