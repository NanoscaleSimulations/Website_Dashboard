import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please provide a name'],
        minLength: 3,
        maxLength: 20,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email'
        },
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minLength: 6,
        select: false, 
    },
    lastName: {
        type: String,
        maxLength: 20,
        trim: true,
        default: 'Lastname'
    },
    location: {
        type: String,
        maxLength: 20,
        trim: true,
        default: 'My City'
    },
});


// SETUP MIDDLEWARE 
UserSchema.pre('save', async function() {
    //console.log(this.modifiedPaths());
    // console.log(this.password);
    if(!this.isModified('password')) return
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
});

// JWT FUNCTION
UserSchema.methods.createJWT = function () {
    // console.log(this)
    return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
        // expiresIn: '100', // 100 seconds
    });
};

// COMPARE PASSWORD
UserSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
};


export default mongoose.model('User', UserSchema); 