const { getTodo, addTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller")
const { userProtected } = require("../middleware/auth.middleware")

const router = require("express").Router()

router
    .post("/addTodo", userProtected, addTodo)
    .get("/getTodo", userProtected, getTodo)
    .put("/updateTodo/:kuchbhi", userProtected, updateTodo)
    .delete("/deleteTodo/:kuchbhi", userProtected, deleteTodo)
//                          id hai
module.exports = router