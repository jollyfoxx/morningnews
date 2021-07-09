const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    title: String, 
    description: String, 
    img: String, 
})

const articleModel = mongoose.model('articles', articleSchema)

module.exports = articleModel