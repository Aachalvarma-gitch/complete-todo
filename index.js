const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const path = require("path")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(express.static("dist"))
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/todo", require("./routes/todo.routes"))

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
    // res.status(404).json({ message: `route not found:${req.method}:${req.url}` })
})
mongoose.connect(process.env.MONGO_URL)

mongoose.connection.once("open", () => {
    console.log(__dirname);

    console.log("mongo connected");

    app.listen(process.env.PORT, console.log("server running"))
})
