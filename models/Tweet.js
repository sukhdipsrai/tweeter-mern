const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TweetScehma = new Schema({
    // foregin key?
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.new
    }
});


module.exports = Tweet = mongoose.model('tweet', TweetScehma);