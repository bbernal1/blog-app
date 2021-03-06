const express = require("express");
const Blog = require("../schemas/blog-schema");
const blogRouter = express.Router();
const verifyJWT = require("../middleware/jwt")

blogRouter.get("/", (req, res) => {
    Blog.find((error, result) => {
        if (error) {
            res.status(404).json({
                error: error.message
            });
        }
        else {
            res.status(200).json({
                message: result.filter((entry) => {
                    return entry.private === false;
                })
            })
        }

    })
})

blogRouter.get("/:username", verifyJWT, (req, res) => {
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

blogRouter.post("/:username", verifyJWT, (req, res) => {
    const username = req.params.username;
    const blog = req.body;
    const createdBy = blog.created_by;
    if (createdBy !== username) {
        res.status(403).json({
            message: "Username is incorrect"
        })
    }
    else {
        Blog.create(blog, (error, result) => {
            if (error) {
                res.status(400).json({ message: error.message });
            }
            else {
                res.status(200).json({ data: result });
            }
        })
    }


})

blogRouter.put("/:id", verifyJWT, (req, res) => {
    const id = req.params.id;
    const blog = req.body;
    let newBlog;
    Blog.findOneAndUpdate({ _id: id }, req.body, (error, result) => {
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

blogRouter.delete("/:id", verifyJWT, (req, res) => {
    const id = req.params.id;
    const blog = req.body;
    Blog.deleteOne({ _id: id }, (error) => {
        if (error) {
            res.status(400).json({ message: error.message });
        }
    })
    res.status(200).json({
        message: "blog entry deleted successfully"
    })

})

module.exports = blogRouter;