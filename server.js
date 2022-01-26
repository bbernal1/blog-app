const express = require("express");
const authRouter = require("./routes/auth-route");
const blogRouter = require("./routes/blog-route");
const app = express();
const port = 3000 || process.env.PORT;

app.use("/auth",authRouter);
app.use("/blog",blogRouter);
app.listen(port,()=>{
    console.log("Listening");
});

