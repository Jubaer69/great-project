import mongoose from "mongoose"

const studentStr = new mongoose.Schema({
    name: String,
    roll: String,
    // group: String,
    // section: String
})

export const Hello = mongoose.models.students || mongoose.model('students', studentStr)