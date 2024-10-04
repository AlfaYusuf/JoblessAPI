const mongoose= require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/JobPortalDB")
.then (()=>{
    console.log('mongo connected')
})
.catch(()=>{
    console.log (error)
})