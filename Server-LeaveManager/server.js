const express = require('express');
const mongoose = require('mongoose')
const officeRoutes=require('./routes/routes')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/StaffData')
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/api',officeRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})