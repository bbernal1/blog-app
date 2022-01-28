const jwt = require("jsonwebtoken")

function verifyJWT(req,res,next) {
    let token = req.get("Authorization");
    if (token === undefined || token === null) {
        res.status(403).json({message: "You must be logged in"});
    }
    jwt.verify(token,process.env.JWT_SECRET,(error,result)=>{
        if (error){
            res.status(400).json({message:"Error"});
        }
        if (result === false) {
            res.status(403).json({
                message:"You must be logged in"
            })
        }
        next();
    })
}

module.exports = verifyJWT;