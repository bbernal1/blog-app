const express = require("express");
const blogRouter = express.Router();

blogRouter.route("/")

.get((req,res)=>{
    res.status(200).json({
        message:"in blog route"
    })
})

module.exports = blogRouter;