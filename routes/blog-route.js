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

    Blog.find({ username: username }, (error, result) => {
        if (error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(200).json({
                message: result
            })
        }
    })
})

blogRouter.post("/:username", (req, res) => {
    const blog = req.body;
    console.log(blog)
    Blog.create(blog, (error, result) => {
        if (error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(200).json({ data: result });
        }
    })

})

blogRouter.put("/:id", (req, res) => {
    const id = req.params.id;
    const blog = req.body;
    Blog.updateOne({ _id: id }, req.body, (error, result) => {
        if (error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(200).json({
                message: result
            })
        }
    })
})

blogRouter.delete("/:id", (req, res) => {

})

module.exports = blogRouter;