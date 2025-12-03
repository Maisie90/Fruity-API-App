const express = require('express')    // boilerplate code from express website This app starts a server and listens on port 3000 
const app = express()                  //for connections. The app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.
const fruitsRouter = require("./routes/fruits")                       //calling the json file with the fruits api we downloaded
const logger = require("./logger")      

app.use(logger)
app.use(express.json())    //converts json to javascript

app.get('/', (req, res) => {            // get method, / is endpoint and req - request, res - response. app - assigned functionality fom express
  res.send("Welcome to the Fruity API")           // this is an anonymous arrow function, no variable to call it back - not named. 
})

app.use("/fruits", fruitsRouter)



module.exports = app