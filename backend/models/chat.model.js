const mongoose = require('mongoose')
const Schema = mongoose.Schema
chatSchema = new Schema({
    chatId:{
        type:String,
        require:true
    },
    senderId:{
        type:String,
        require:true
    },
    recieverId:{
        type:String,
        require:true
    },
    lastMessage:{
        type:String,
        require:false
    }
},{
    timestamps:true
})
module.exports = mongoose.model('chatSchema',chatSchema)