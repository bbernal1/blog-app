module.exports = {
    "openapi": "3.0.0",
    "info": {
        "title": "Blog API",
        "description": "API for interacting with a blog backend written using the express.js framework",
        "version": "0.1.0A"
    },
    "paths": {
        "/auth/register": {
            "post": {
                "summary": "Registers a user using the information in the request body."
                
            }
        },
        "/auth/login": {
            "post": {
                "summary": "Logins with the specified username and password in the request body.",
            }
        },
        "/blog/username": {
            "get": {
                "summary": "Returns all of the blogs for the username."
            }
        },
        "/blog/{username}": {
            "post": {
                "summary": "Creates a post using the information in the request body.",
                "parameters" : [{
                    "name": "username", 
                    "in": "path", 
                    "required": "true", 
                    "description": "a username", 
                  }]
            }
        },
        "/blog/id": {
            "put": {
                "summary": "updates the post at the specified id with the information in the request body",
                "parameters" : [{
                    "name": "id", 
                    "in": "path", 
                    
                    "required": "true", 
                    "description": "a blog id", 
                  }]
            }
        },
        "/blog/{id}": {
            "delete": {
                "summary": "Deletes the post with the specified id",
                "parameters" : [{
                    "name": "id", 
                    "in": "path", 
                    
                    "required": "true", 
                    "description": "a blog id", 
                  }]
            }
        }

    }
}