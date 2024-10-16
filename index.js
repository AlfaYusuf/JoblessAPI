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

// Update a job by ID
app.put('/updatejob/:id', async (req, res) => {
    const jobId = req.params.id;
    const jobData = req.body; 
    
    // Log incoming data
    console.log('Received job data for update:', jobData);
    
    try {
        const updatedJob = await Jobdetaile.findByIdAndUpdate(jobId, jobData, { new: true });
        if (!updatedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json(updatedJob);
    } catch (error) {
        console.error('Error updating job:', error);
        res.status(400).json({ message: 'Error updating job' });
    }
});


// Route to delete a job by its ID
app.delete('/deletejob/:id', async (req, resp) => {
    try {
        const jobId = req.params.id;  // Get job ID from request params
        const result = await Jobdetaile.findByIdAndDelete(jobId);  // Find and delete job by ID
        if (result) {
            resp.status(200).send({ message: 'Job deleted successfully', result });
        } else {
            resp.status(404).send({ message: 'Job not found' });
        }
    } catch (error) {
        resp.status(500).send({ message: 'Error deleting job', error });
    }
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});