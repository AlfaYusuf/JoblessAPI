// const mongoose= require('mongoose');
// mongoose.connect("mongodb://localhost:27017/JobPortalDB")

const mongoose = require('mongoose');

const uri = "mongodb+srv://yusuf:Mansoor@cluster0.u1cii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
    .then(() => {
        console.log('Connected to MongoDB Atlas');
        // You can start your server or perform other actions here
    })
    .catch((err) => console.error('Connection error', err));


