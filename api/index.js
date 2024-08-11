import express from "express"
import mongoose from 'mongoose';

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017")
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => {
        console.error(`Could not connect to MongoDB... + ${err}`);
    });

app.listen(port, (req, res) => {
    console.log(`Connected to PORT ${port}...`)
})