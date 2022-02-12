const mongoose = require('mongoose')

const Project = new mongoose.Schema({
    projectName: {type: String, trim:true, default:''},
    projectCheckIn: {type: Date, default: Date.now},
    projectCheckOut: {type: Date, default:''}

})

module.exports = mongoose.model('project', Project)
