const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    rollNo: {type: Number}
}, {
    collection: "students"
});

module.exports = mongoose.model("studentSchema", schema);