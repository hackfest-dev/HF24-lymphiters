const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Phone_Number: {
        type: Number,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    
});

userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('Password')) {
        return next();
    }
    user.Password = await bcrypt.hash(user.Password, 8);
    next();
});

module.exports = mongoose.model("User", userSchema);
