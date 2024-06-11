const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const products=require("./models/product")

const app=express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.get("/contact",(req,res)=>{
    res.send("Welcome")
})

app.listen(8081,()=>{
    console.log("Server started")
})