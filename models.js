const mongoose = require('mongoose');

const blogPostSchema = mongoose.Schema({
    title: { type: String, required: true },
    author: {
        firstName: String,
        lastName: String
    },
    content: { type: String, required: true }
});

blogPostSchema.virtual('authorString').get(function() {
    return `${this.author.firstName} ${this.author.lastName}`.trim()
});

blogPostSchema.methods.apiRepr = function() {

    return {
        id: this._id,
        title: this.title,
        author: this.authorString,
        content: this.content
    };
}

const Post = mongoose.model('BlogPost', blogPostSchema);

module.exports = { Post };