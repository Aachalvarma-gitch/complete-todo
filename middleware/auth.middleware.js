const jwt = require("jsonwebtoken")

exports.userProtected = async (req, res, next) => {
    const token = req.cookies.auth
    if (!token) {
        return res.status(401).json({ message: "no cookie found" })
    }
    jwt.verify(token, process.env.JWT_KEY, (error, decode) => { // decode me auth.controller me se jwt.sign se pura object return hora hai
        if (error) {
            return res.status(401).json({ message: "invalid token" })
        }
        req.user = decode._id
        next()
    })
}