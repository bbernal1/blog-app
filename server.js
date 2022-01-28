const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./routes/auth-route");
const blogRouter = require("./routes/blog-route");
const helmet = require("helmet")
const dotenv = require("dotenv");
const mongoConnect = require("./config");
const swagger = require("swagger-ui-express")
const swaggerRoute = require("./docs/basic-info")
const app = express();
const port = process.env.PORT ||3000;

dotenv.config();
app.use('/swagger', swagger.serve, swagger.setup(swaggerRoute))
app.use(helmet());

app.use(bodyParser.json());
app.use("/auth", authRouter);
app.use("/blog", blogRouter);
app.listen(port, () => {
    mongoConnect();
    console.log("Listening");
});