const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        required: [true, 'Please enter your firstname']

    },
   
    lastname: {
        type: String,
        trim: true,
        required: [true, 'Please enter your lastname']

    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Please enter your email']

    },
    contact: {
        type: Number,
        trim: true,
        required: [true, 'Please enter your contact']

    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);