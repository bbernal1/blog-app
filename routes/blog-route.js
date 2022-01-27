const express = require("express");
const Blog = require("../schemas/blog-schema");
const blogRouter = express.Router();

blogRouter.get("/", (req, res) => {
    res.status(200).json({
        message: "in blog route"
    })
})

blogRouter.get("/:username", (req, res) => {
    const username = req.params.username;
    
})

blogRouter.get("/:id", (req, res) => {

})

blogRouter.post("/:username", (req, res) => {

})

blogRouter.post("/:id", (req, res) => {

})

module.exports = blogRouter;