# Blog Application
## Swagger Documentation
### https://mod2-blog-app.herokuapp.com/swagger/

## Installation Instructions
### 1. Download or git clone the repository.
### 2. Use npm -i to install the necessary packages.
### 3. Create a MongoDB Atlas account. Replace the MONGODB_URI environmental variable with your own connection string. Also, change the other environemental variables if desired.
### 4. Change the docs/basic-info.js swagger paths to your own paths for documentation purposes.
### 5. First register a user. Then login and record the authorization token in the response header. Include the authorization token in the request header when using the various ../blog/.. endpoints.

## Environmental variables
### Port
### MONGODB_URI
### JWT_SECRET
### SALT
