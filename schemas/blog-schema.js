const mongoose = require("mongoose");
/*
 - created_by: string, required
        - created_at: date, required
        - blog_title: string, required
        - blog_content: string, required
        - blog_content: string, required
        - private: boolean, required
*/
const blogSchema = mongoose.Schema({
    created_at:{type : Date , required: true},
    blog_title:{type: String, required: true},
    blog_content:{type: String, required: true},
    private:{type: Boolean, required: true}
});

module.exports = mongoose.Model(blog,blogSchema);