const { Schema } = require("mongoose");

const BookmarkSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

module.exports = BookmarkSchema;