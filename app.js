const express = require('express')

// create the server
const app = express()
const port = 3000

// serve files from the `/public` directory
app.use(express.static('public'))

// parse things as json
app.use(express.json())

// what our message currently is, reses back to this default whenever the
// server is restarted
var message = 'Enter a message below';

// when a POST request comes to /message, set the message variable to the
// input that is received.
//
// echo the message back
app.post('/message', (req, res) => {
  message = req.body.message
  res.send(message)
})

// when a GET request comes to /message, send the current value of the `message`
// variable.
app.get('/message', (req, res) => {
  res.send(message)
})

// start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
