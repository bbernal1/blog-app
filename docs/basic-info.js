module.exports = {
    "openapi": "3.0.0",
    "info": {
        "title": "Sample API",
        "description": "Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.",
        "version": "0.1.9"
    },
    "paths": {
        "/blogs": {
            "get": {
                "summary": "Returns a list of users.",
                "description": "Optional extended description in CommonMark or HTML"
            }
        }
    }
}