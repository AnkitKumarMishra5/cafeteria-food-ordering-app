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
    employeeId: {
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
    },
    regId:{
        type: Number,
        default: 0
    }
},{ timestamps: true })


// COUNTER SCHEMA - FOR CONTINUOUS REGISTRATION ID'S 
var CounterSchema = mongoose.Schema({
    seq: { type: Number, default: 0 }
});

var Counter = mongoose.model('Counter', CounterSchema);

// MIDDLEWARE
userSchema.pre('save', function(next){
    var newUser = this;
    Counter.findByIdAndUpdate({_id: "6009fa4448734dcc5ece655a"}, {$inc: { seq: 1} }, function(error, counter)   {
        if(error){
            return next(error);
        }
        if(!newUser.isNew)
            next();
        newUser.regId = counter.seq;
        next();
    });
});


userSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', userSchema);

export default User;