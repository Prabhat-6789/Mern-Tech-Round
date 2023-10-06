const mongoose = require("mongoose");

const workSnapsTimeEntry = new mongoose.Schema({

    student: {
        type: mongoose.Schema.ObjectId,
        ref: "Student"
        },
        timeEntries: {
            type:Date,
            default:Date.now()
        }
});

module.exports = mongoose.model("WorkSnap",workSnapsTimeEntry);