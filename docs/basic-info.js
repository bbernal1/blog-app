module.exports = {
    "openapi": "3.0.0",
    "info": {
        "title": "Sample API",
        "description": "Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.",
        "version": "0.1.9"
    },
    "paths": {
        "/blog": {
            "get": {
                "summary": "Returns a list of public blog posts.",
                "description":""
            }
        },
        "/blog/username": {
            "get": {
                "summary": "Returns a list of public blog posts.",
                "parameters" : {
                    name: "username", 
                    in: "path", 
                    schema: {
                      $ref: "#/schemas/auth", 
                    },
                    required: true, 
                    description: "a blog username", 
                  },
            }
        }
    }
}