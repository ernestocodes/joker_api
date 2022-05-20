// Import Controller
const JokeController = require("../controllers/joke.controller")

// Routes
module.exports = app =>{
    app.get("/api/jokes", JokeController.allJokes)
    app.get("/api/jokes/:id", JokeController.oneJoke)
    app.get("/api/joke/random", JokeController.randomJoke)
    app.post("/api/jokes", JokeController.createJoke)
    app.put("/api/jokes/:id", JokeController.updateJoke)
    app.delete("/api/jokes/:id", JokeController.deleteJoke)
}
