const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
mongoose.connect('mongodb+srv://vivekgaur881:ajjuvivek123@cluster0.c7edoti.mongodb.net/').then(()=>console.log("database connected")).catch((error)=>{console.log("error in connecting to db",error)})
const app = express()
const server = require("http").createServer(app)
const io = require('socket.io')(server)
io.on("connection", (socket) => {
    console.log("socket ",socket)
    socket.on('chat',(payload)=>{
        console.log("payload ",payload)
        io.emit('chat',payload)
    })
});
app.use(express.json())
app.use(morgan('dev'))
app.use('/auth',require('./routes/auth.route'))
app.use('/api',require('./routes/api.route'))
server.listen(8800 , ()=>{
    console.log("server listening")
})
