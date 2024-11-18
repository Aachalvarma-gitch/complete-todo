const Todo = require("../models/Todo")

exports.getTodo = async (req, res) => {
    const result = await Todo.find({ userId: req.user })//data lane ke liyea find use kiya
    res.json({ message: "getTodo success", result })
}
exports.addTodo = async (req, res) => {
    await Todo.create({ ...req.body, userId: req.user })
    res.json({ message: "addTodo success" })
}
exports.updateTodo = async (req, res) => {
    const { kuchbhi } = req.params
    await Todo.findByIdAndUpdate(kuchbhi, req.body)
    res.json({ message: "updateTodo success" })
}
exports.deleteTodo = async (req, res) => {
    const { kuchbhi } = req.params
    await Todo.findByIdAndDelete(kuchbhi, req.body)
    res.json({ message: "deleteTodo success" })
}