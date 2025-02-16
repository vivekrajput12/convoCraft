const constants = require('../constants') 
const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const login = async(req , res)=>{
    const userExist = await User.findOne({email:req.body.email})
    if(!userExist) return res.send({
        status:0,
        message:constants.USER_NOT_FOUND
    })
    const isCorrect = bcrypt.compareSync(req.body.password,userExist.password)
    if(isCorrect){
        res.send({
            status:1,
            message:constants.lOGIN_SUCCESS
        })
    }
    console.log("ssssss" , isCorrect)
    res.send({
        status:0,
        message:constants.INVALID_CREDENTIALS
    })
}
const register = async(req , res)=>{
    const userExist = await User.findOne({email:req.body.email})
    if(userExist) return res.send({
        status:0,
        message:constants.USER_EXIST})
    const salt = await bcrypt.genSalt(10)
    const hassedPassword = await bcrypt.hash(req.body.password , salt)
    const newUser = new User({
        ...req.body,
        password:hassedPassword
    })
    await newUser.save()
    res.send({
        newUser,
        status:1,
        message:constants.REGISTERD_SUCCESS,
    })
}
module.exports = {login,register}