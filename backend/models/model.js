const mongoose = require('mongoose')
const Schema = mongoose.Schema

const picSchema = new Schema({
    img : {type : String}
})

const Pic = mongoose.model('Pic', picSchema)
module.exports = Pic