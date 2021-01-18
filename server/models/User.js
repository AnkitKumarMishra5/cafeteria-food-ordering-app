import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    fullName: {
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
        type: String,
        required: true
    }
})

var User = mongoose.model('User', userSchema);

export default User;