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

});

module.exports = mongoose.model("Jobdetaile",JobSchema)