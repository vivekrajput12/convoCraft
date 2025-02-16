const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors');
const bodyParser = require('body-parser')
mongoose.connect('mongodb+srv://vivekgaur881:ajjuvivek123@cluster0.c7edoti.mongodb.net/').then(()=>console.log("database connected")).catch((error)=>{console.log("error in connecting to db",error)})
const app = express()
app.use(bodyParser.json())
const server = require("http").createServer(app)
const io = require('socket.io')(server, {
    cors: {
      origin: "http://127.0.0.1:5173",
      methods: ["GET", "POST"]
    }
  });
io.on("connection", (socket) => {
    console.log("socket ",socket.id)
    socket.on('chat',(payload)=>{
        console.log("payload ",payload)
        io.emit('chat',payload)
    })
});
app.use(
    cors({
      origin: "http://127.0.0.1:5173",
      credentials: true,
    })
);
app.use(express.json())
app.use(morgan('dev'))
app.use('/auth',require('./routes/auth.route'))
app.use('/api',require('./routes/chat.route'))
// app.use('/api',require('./routes/api.route'))
server.listen(8800 , ()=>{
    console.log("server listening")
})
