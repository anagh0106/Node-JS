const authMiddleware = (req, res, next) => {
    const token = req.headers.autorization;
    console.log("Token is : ", token)
    if (token == 123456) {
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