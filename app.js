const express = require("express")
const cors=require('cors')
const UserRouter = require("./Routes/UserRouter")
const connection = require("./Config/db")
require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/",UserRouter)


app.listen(8080,()=>{
    connection()
    console.log(`server running at ${process.env.PORT}`)
})