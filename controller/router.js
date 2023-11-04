const express = require("express");
const studentRoute = express.Router();
const mongoose = require("mongoose");
const db = require("../model/schema");

studentRoute.get("/", (req, res) => {
    db.find().sort({rollNo: 1})
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

studentRoute.route("/update-student/:id")
.get((req, res) => {
    db.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
})
.put((req, res) => {
    db.findByIdAndUpdate(req.params.id, {$set: req.body})
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

studentRoute.delete("/delete-student/:id", (req, res) => {
    db.findByIdAndDelete(req.params.id)
    .then(data => res.send(data))
    .catch(err => console.log(err));
});

studentRoute.post("/create-student", (req, res) => {
    db.create(req.body)
    .then(data =>res.send(data))
    .catch(err => console.log(err));
});

module.exports = studentRoute;