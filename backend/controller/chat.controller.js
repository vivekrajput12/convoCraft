const Message = require('../models/message.model')
const getAllChat = async(req,res)=>{
    // const id = req.params.id;
    const userId = req.body.userId
    try{
        const chats = await Message.find({senderId:userId})
        res.status(201).send({
            status:0,
            message:"success",
            result:chats
        })
    }catch(err){
        console.log("error in getchat ",err)
    }
    
}
const getConversation = async(req ,res)=>{
    // console.log("hitting",req.params)
    // const userId = req.params.id
    const {userId , reciverId} = req.body
    let senderId = userId 
    console.log("hitting",req.body)
    let conversationId = senderId + '#' + reciverId 
    try{
        const chats = await Message.find({conversationId:conversationId})
        res.status(201).send({
            status:0,
            message:"success",
            result:chats
        })
    }catch(err){
        console.log("error in getchat ",err)
    }
}
const createMessage = async(req ,res)=>{
    const { userId , message , reciverId } = req.body
    let senderId = userId
    let conversationId = senderId + '#' + reciverId 
    const newMsg = new Message({
        conversationId,
        senderId:userId,
        desc:message
    })
    try{
        await newMsg.save()
        res.status(201).send({
            status:0,
            message:"message sent"
        })
    }catch(err){
        console.log("error  >> ",err)
    }
}

module.exports = {
    getAllChat,
    getConversation,
    createMessage,
};