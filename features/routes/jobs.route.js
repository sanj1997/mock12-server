const express=require("express")
const { postJobs } = require("../controllers/jobs.controller")

const route=express.Router()

route.post("/",async(req,res)=>{
    console.log(req.body)
   const {company,postedAt,city,location,role,level,contract,position,language}=req.body
   let response=await postJobs(company,postedAt,city,location,role,level,contract,position,language)
   if(response.message=="Successful")
   {
     return res.send(response)
   }
   return res.status(401).send(response)
})



module.exports=route