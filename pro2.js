const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const port = 5000

app.get("/",(req,res) => {
    res.send("Hello world!")
})

//adding bodyparser for json
app.use(bodyParser.json())

//this is dummy API
app.get("/api/v1",(req,res) => {
    res.json(
        {
            message:"Hello from API Version 1"
        }
    )
})

app.listen(port,() => {
    console.log(`my app is opened in port : ${port}`)
}) 