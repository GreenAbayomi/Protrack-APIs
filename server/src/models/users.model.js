const { Schema, model} = require('mongoose')


const UserSchema = new Schema ({
    firstname:{
        type: String,
        required: true
        
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    refreshToken : {
        type: String
    }
},
{
    timestamps : true
})

const UserModel = new model ('user', UserSchema)


module.exports = UserModel