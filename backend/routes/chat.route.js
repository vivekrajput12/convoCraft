const express = require('express')
const {getAllChat,getConversation,createMessage}  = require('../controller/chat.controller')
const router = express.Router()
router.get('/getAllChat',getAllChat)
router.get("/getConversation",getConversation)
router.post('/createMessage',createMessage)
module.exports = router