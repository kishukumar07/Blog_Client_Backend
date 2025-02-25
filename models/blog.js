const mongoose = require('mongoose')


const blogSchema = mongoose.Schema({
    "title": {type:String , require :true},
    "body": {type:String ,require :true },
    "user": {type:String, require :true },
    "userID": {type:String, require :true},
    "category": {type:String, require :true},
    "live": {type:Boolean , require :true},
},{
    versionKey : false 
})



const Blogmodel = mongoose.model("blog", blogSchema)

module.exports = {
    Blogmodel
}