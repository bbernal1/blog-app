module.exports = {
    "openapi": "3.0.0",

    "info": {
        "title": "Blog API",
        "description": "API for registering and logging in users. API for creating, reading, updating, and deleting blog posts.",
        "version": "1.0.0"
    },
    "paths": {
        "https://mod2-blog-app.herokuapp.com/auth/register": {
            "post": {
                "summary": "Registers a user using the information in the request body.",
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/user", // todo input data model
                            },
                        },
                    },
                }
            },
        },
        "https://mod2-blog-app.herokuapp.com/auth/login": {
            "post": {
                "summary": "Logins with the specified username and password in the request body.",
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "username": {
                                        "type": "string"
                                    },
                                    "password": {
                                        "type": "string"
                                    },
                                },
                            },
                        },
                    },
                }
            }
        },
        "https://mod2-blog-app.herokuapp.com/blog": {
            "get": {
                "summary": "Returns all public blog posts."    
            }
        },
        "https://mod2-blog-app.herokuapp.com/blog/{username}": {
            "get": {
                "summary": "Returns all of the blogs for the username.",
                "parameters": [{
                    "name": "username",
                    "in": "path",
                    "required": "true",
                    "description": "a username",
                }]
            },
            "post": {
                "summary": "Creates a post using the information in the request body.",
                "parameters": [{
                    "name": "username",
                    "in": "path",
                    "required": "true",
                    "description": "a username",
                }],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/user", // todo input data model
                            },
                        },
                    },
                }
            }
        },
        "https://mod2-blog-app.herokuapp.com/blog/{id}": {
            "put": {
                "summary": "updates the post at the specified id with the information in the request body",
                "parameters": [{
                    "name": "id",
                    "in": "path",
                    "required": "true",
                    "description": "a blog id",
                }],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "properties": {
                                    "property": {
                                        "type": "string"
                                    }
                                },
                            },
                        },
                    },
                }
            },
            "delete": {
                "summary": "Deletes the post with the specified id",
                "parameters": [{
                    "name": "id",
                    "in": "path",
                    "required": "true",
                    "description": "a blog id",
                }]
            }
        }
    },
    "components": {
        "schemas": {
            "user": {
                "type": "object", // data type
                "properties": {
                    "username": {
                        "type": "string"
                    },
                    "email": {
                        "type": "string"
                    },
                    "birthday": {
                        "type": "string"
                    },
                    "age": {
                        "type": "string"
                    },
                    "password": {
                        "type": "string"
                    }
                }
            },
            "blog": {
                "type": "object", // data type
                "properties": {
                    "created_by": {
                        "type": "string"
                    },
                    "created_at": {
                        "type": "date"
                    },
                    "blog_title": {
                        "type": "string"
                    },
                    "blog_content": {
                        "type": "string"
                    },
                    "private": {
                        "type": "boolean"
                    }
                }
            },
        }
    }
}
