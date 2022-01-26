const express = require("express");
const authRouter = express.Router();

authRouter.get("/", (req, res) => {
    res.status(200).json({
        message: "in auth route"
    })
});

//complete this method first after creating schema
authRouter.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    //do error checking
    //insert user in database
})

authRouter.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    //do error checking
    //login if password matches
})

module.exports = authRouter;