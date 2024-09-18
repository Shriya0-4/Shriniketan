const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  heading:String,
  description:String
})


const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;
