const mongoose = require("mongoose");
/*
 username: string, required
        - email: string, required
        - birthday: date, required
        - age: number
- password: string, required
*/
const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    birthday: { type: Date, required: true },
    age: { type: Number },
    password: { type: String, required: true },
})

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;