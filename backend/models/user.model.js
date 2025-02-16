const mongoose  = require('mongoose')
const {Schema} = mongoose
const Users  = new Schema({
    email: {
        type: String,
        required: true
      },
    password: {
        type: String,
        require: true
    },
    country:{
        type: String,
        require: false
    },
    age:{   
        type: Number,
        require: false
    },
    username:{
        type: String,
        require: false,
        unique: true
    },
    profileImage:{
        type: String,
        require: false
    },
    phoneNo:{
        type: String,
        require: false
    }
},{
    timestamps:true
})
module.exports  = mongoose.model('Users' , Users)
