const mongoose = require('mongoose');

// Define the schema
const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true // corrected "require" to "required"
    }
});

// Export the model
module.exports = mongoose.model('ToDo', todoSchema);
