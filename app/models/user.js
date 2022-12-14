let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

//user schema
let User = mongoose.Schema
(
    {
        username: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'Username is required'
        },
       email: 
       {
            type: String,
            default: '',
            trim: true,
            required: 'Email Address is required',
            match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
       },
       displayName: 
       {
            type: String,
            default: '',
            trim: true,
            required: 'Display Name is required'
       },
       created: 
       {
            type: Date,
            default: Date.now
       },
       update: 
       {
            type: Date,
            default: Date.now
       }
    },
    {
        collection: "users"
    }
);

let options = ({ missingPasswordError: 'Wrong / Missing Password'});
User.plugin(passportLocalMongoose, options);
module.exports.User = mongoose.model('User', User);