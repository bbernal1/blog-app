const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../schemas/user-schema");
const jwt = require("jsonwebtoken")
const authRouter = express.Router();


authRouter.post("/register", async (req, res) => {
    const user = req.body;
    const password = user.password;

    if (password !== undefined) {
        let salt = Number(process.env.SALT);
        let hashedPassword = await bcrypt.hash(password, salt);
        user.password = hashedPassword;
    }

    User.create(user, (error, result) => {
        if (error) {
            res.status(400).json({
                message: error.message
            });
        }
        else {
            res.status(200).json({ data: result });
        }
    })
})


authRouter.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username === undefined || password === undefined) {
        res.status(200).json({
            message: "missing username and/or password"
        })
    }


    User.findOne({ username: username }, (error, result) => {

        if (error) {
            res.status(400).json({ message: error.message });
        }

        if (result === null) {
            res.status(404).json({ message: "User not found" });
        }
        else {
            bcrypt.compare(password, result.password, (error, matching) => {
                if (matching === false) {
                    res.status(403).json({ message: "Either username or pasword is incorrect" });
                }
                else {
                    let token = jwt.sign(username, process.env.JWT_SECRET)
                    res.setHeader("authorization", token);
                    res.status(200).json({
                        data: result
                    })
                }
            })

        }



    })

})

module.exports = authRouter