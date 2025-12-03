require('dotenv').config() // calling .env file
const app = require("./app")
const port = process.env.PORT  // PORT is in the .env file

app.listen(port, () => {                            
  console.log(`FruityApp listening on port ${port}`)  
})