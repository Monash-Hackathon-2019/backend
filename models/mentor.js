const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema

const MentorSchema = new Schema({
  firstName: String,
  lastName: String,
  university: String,
  email:String,
  afterKlasGroup:String
});

const Mentor = mongoose.model('mentor', MentorSchema);

module.exports = Mentor;
