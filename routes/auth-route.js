const express = require("express");
const User = require("../schemas/user-schema");

const authRouter = express.Router();

authRouter.get("/", (req, res) => {
    res.status(200).json({
        message: "in auth route"
    })
});

//complete this method first after creating schema
authRouter.post("/register", (req, res) => {
    const user = req.body;
    const username = req.body.username;
    const password = req.body.password;
    const birthday = req.body.birthday;
    const email = req.body.email;

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

// authRouter.post("/login", (req, res, next) => {

// })
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
            res.status(200).json({
                message: result
            })
        }



    })
    // res.status(200).json({
    //     message: res.locals.result
    // })

    //bcrypt.compare()

    //do error checking
    //login if password matches
})

module.exports = authRouter