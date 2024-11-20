const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    console.log("Token is : ", token)
    if (token == "Anagh") {
        next();
    }
    else {
        res.status(404).json({
            message: "Unauthorized"
        })
    }
}

module.exports = {
    authMiddleware
}