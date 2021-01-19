import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    orgName: {
        type: String,
        required: true
    }, 
    employeeID: {
        type: String,
        required: true
    }, 
    email:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    idCard:{
        type: String,
        required: true
    },
    password:{
        type: String
    }
})

userSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', userSchema);

export default User;