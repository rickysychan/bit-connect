const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000

// Log requests to the console.
app.use(logger('dev'))

// Parse incoming requests data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Require our routes into the application.
require('./server/routes')(app)

app.get('*', (req, res) => {
  res.send({ express: 'Hello From netherlands' })
})

app.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = app
