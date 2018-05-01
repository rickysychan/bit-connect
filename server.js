const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const io = require('socket.io')();

const app = express()
const port = process.env.PORT || 5000
io.listen(port)
console.log('socket listening on port ', port)
// Log requests to the console.
app.use(logger('dev'))

// Parse incoming requests data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Require our routes into the application.
require('./server/routes')(app)

app.get('*', (req, res) => {
  res.send({ express: 'Hello Bitconnect User!' })
})

app.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = app
