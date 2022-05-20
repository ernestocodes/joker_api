// import all dependencies
const express = require("express")
const app = express()

// config mongoose
require("./configs/mongoos.config")

// express config for post
app.use(express.json(), express.urlencoded({ extended: true }));

// get the routes Option 1
const Routes = require("./routes/joke.routes")
Routes(app)

// getting the routes Option 2
// require("./routes/joke.routes")(app)

// listen to the port
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
