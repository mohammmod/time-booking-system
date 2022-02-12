const mongoose = require('mongoose')

const User = new mongoose.Schema({
	firstName: {type:String, trim:true, default:''}, 
	lastName: {type:String, trim:true, default:''},
	email: {type:String, default:''},
	phone: {type:String, trim:true, default:''},

})

module.exports = mongoose.model('User', User)