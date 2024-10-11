const mongoose= require('mongoose');

const JobSchema = new mongoose.Schema({
   JobDescription:String,
   Address:String,
   JobTitle:String,
   Salary:String,
   Contact:String,
   Email:String,
   EducationRequirement:String,
   Experience:String,
   CompanyName:String,
   Location:String,
   RemoteOrOnsite:String,
   JobType:String,
   Link:String,
   postedDate: {
      type: Date,
      default: Date.now,  // Automatically captures the current date when the job is created
  },

});

module.exports = mongoose.model("Jobdetaile",JobSchema)