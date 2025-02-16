const mongoose = require('mongoose')
const {Schema} = mongoose
const MessageSchema = new Schema({
    conversationId: {
        type: String,
        required: true,
      },
    senderId:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        require:false
    }
},{
    timestamps:true
});
module.exports = mongoose.model('Message',MessageSchema)