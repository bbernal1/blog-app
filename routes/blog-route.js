const express = require("express");
const blogRouter = express.Router();

blogRouter.get("/", (req, res) => {
    res.status(200).json({
        message: "in blog route"
    })
})

blogRouter.get("/:username", (req, res) => {

})

blogRouter.get("/:id", (req, res) => {

})

blogRouter.post("/:username", (req, res) => {

})

blogRouter.post("/:id", (req, res) => {

})

module.exports = blogRouter;