const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./routes/auth-route");
const blogRouter = require("./routes/blog-route");
const dotenv = require("dotenv");
const mongoConnect = require("./config");

const app = express();
const port = 3000 || process.env.PORT;

dotenv.config();
app.use(bodyParser.json());
app.use("/auth", authRouter);
app.use("/blog", blogRouter);
app.listen(port, () => {
    mongoConnect();
    console.log("Listening");
});