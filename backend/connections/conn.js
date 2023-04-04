const mongoose = require('mongoose')
mongoose.set(`strictQuery`, true)
async function getConnection(){
    await mongoose.connect('mongodb+srv://neelesh:neelesh@cluster0.2unk7qi.mongodb.net/?retryWrites=true&w=majority').then(()=>{
        console.log('connected to database');
    })
}

module.exports = getConnection