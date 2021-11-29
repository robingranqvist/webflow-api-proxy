const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')
const port = 3000 || process.env.PORT
const rateLimit = require("express-rate-limit")
require('dotenv').config()

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 20 // 20 requests
})

app.use(limiter)
app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.get('/', (req, res) => {
    // The API url & amount of Dribbble shots to pull
    axios.get(process.env.API_URL + process.env.API_SHOT_AMOUNT, {
        headers: {
            Authorization: 'Bearer ' + process.env.API_ACCESS_TOKEN
        }
    })
    .then(response => {
        res.send(response.data)
    })
    .catch(error => {
        res.send(error)
    })
})

app.listen(port, () => { console.log(`listening on port ${port}`) })
