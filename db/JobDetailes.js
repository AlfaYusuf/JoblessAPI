const mongoose= require('mongoose');

const JobSchema = new mongoose.Schema({
   JobDescription:String,
   Address:String,
   JobTitle:String,
   Salary:String,
   Contact:String,
   Email:String,
   EducationRequirmnet:String,
   Exprience:String,
   CompanyName:String,
   Location:String,
   RemoteOrOnSite:String,
   jobtype:String,
   postedDate: {
      type: Date,
      default: Date.now,  // Automatically captures the current date when the job is created
  },

});

module.exports = mongoose.model("Jobdetaile",JobSchema)