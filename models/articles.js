const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    img: String,
    title: String,
    description: String,
    

})

const articleModel = mongoose.model('articles', articleSchema)

module.exports = articleModel