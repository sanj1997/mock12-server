const express=require("express")
const { postJobs, getJobs } = require("../controllers/jobs.controller")

const route=express.Router()

route.post("/",async(req,res)=>{
   const {company,postedAt,city,location,role,level,contract,position,language}=req.body
   let response=await postJobs(company,postedAt,city,location,role,level,contract,position,language)
   if(response.message=="Successful")
   {
     return res.send(response)
   }
   return res.status(401).send(response)
})

route.get("/",async(req,res)=>{
  let response=await getJobs(req)
  if(response.message=="Successful")
  {
    return res.send(response)
  }
  return res.status(401).send(response)
})

module.exports=route