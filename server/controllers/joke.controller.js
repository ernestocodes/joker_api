// Import Model Option 1
const Joke = require("./../models/joke.model");

// Import Model Option 2 (must have export option 2 to work)
// const {Joke} = require("./../models/joke.model");

// getAll
module.exports.allJokes = (req, res) => {
    Joke.find() //gives an array
        .then(jokes => res.json(jokes)) //successful response
        .catch(err => res.json(err)) // unsuccessful response
}
// getOne
module.exports.oneJoke = (req, res) => {
    const id = req.params.id
    Joke.findOne({ _id: id })
        .then(joke => res.json(joke))
        .catch(err => res.json(err))
}

// getOne random
module.exports.randomJoke = (req, res) =>{
    Joke.find()
        .then(jokes => res.json(jokes[Math.floor(Math.random() * jokes.length)]))
        .catch(err => res.json(err))
}

// create Option 1
// module.exports.createJoke = (req, res) => {
//     Joke.create(req.body)
//         .then(response => res.json(response))
//         .catch(err => res.json(err))
// }

// create Option 2
module.exports.createJoke = (req, res) => {
    const newJoke = new Joke(req.body)
    newJoke.save()
        .then(response => res.json(response))
        .catch(err => res.json(err))
}

// update - getOne + create
module.exports.updateJoke = (req, res) => {
    const id = req.params.id
    Joke.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true, runValidator: true }
    )
        .then(response => res.json(response))
        .catch(err => res.json(err))
}
// delete
module.exports.deleteJoke = (req, res) => {
    const id = req.params.id
    Joke.deleteOne({ _id: id })
        .then(response => res.json(response))
        .catch(err => res.json(err))
}