const express = require('express');
const cors = require ("cors")
require('./db/config')

const User = require("./db/User") 

const Jobdetaile = require("./db/JobDetailes")

const app = express();

app.use(express.json());
app.use(cors())

    // Route to register a new user
     app.post("/register",async (req,resp)=>{
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result)
})

// Route to post a job
app.post("/postjob",async (req,resp)=>{
    debugger
    console.log('Received job data:', req.body);  // Log the incoming data
    let job= new Jobdetaile(req.body);
    let result = await job.save()
    resp.send(result)
})

// Route to get all jobs from the JobDetailes collection
app.get('/getjobs', async (req, resp) => {
    try {
        const jobs = await Jobdetaile.find().sort({ postedDate: -1 });
        resp.status(200).send(jobs);
    } catch (error) {
        resp.status(500).send({ error: 'Error fetching jobs from database' });
    }
}); 

// Route to get a specific job by ID (Optional)
// app.get('/getjob/:id', async (req, resp) => {
//     try {
//         let job = await Jobdetaile.findById(req.params.id);
//         if (job) {
//             resp.status(200).send(job);
//         } else {
//             resp.status(404).send({ error: 'Job not found' });
//         }
//     } catch (error) {
//         resp.status(500).send({ error: 'Error fetching job from database' });
//     }
// });

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});