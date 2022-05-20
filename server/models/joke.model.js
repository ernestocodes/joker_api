// import mongoose
const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [8, "Setup must be at least 8 characters long!"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [5, "Punchline must be at least 5 characters long!"]
    },
},
    { timestamps: true }
);

// Export Option 1
const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;

// Export Option 2
// module.exports.Joke = mongoose.model("Joke", JokeSchema);

