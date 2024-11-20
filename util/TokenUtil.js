const jwt = require("jsonwebtoken")
const secret = "Anagh"

const generateToken = (payload) => { // payload = typically user information or claims
    const token = jwt.sign(payload, secret, { expiresIn: 120 }) // used to generate token
    return token
}
const verifyToken = (req, res, next) => {
    try {
        var token = req.headers.authorization;

        if (token != undefined) {
            if (token.startsWith("Bearer")) {
                token = token.split(" ")[1]
                console.log(token)

                const payload = jwt.verify(token, secret)
                console.log("Payload : ", payload)
                next();
            }
            else {
                res.status(401).json({
                    message: "User is not authorized to access this route",
                })
            }
        }

    } catch (err) {
        res.status(500).json({
            message: "User is not authorized to access this route",
            err1: err
        })
    }
}

module.exports = {
    generateToken,
    verifyToken
}