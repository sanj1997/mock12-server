const JobModel = require("../models/jobs.model");


const postJobs=async(company,postedAt,city,location,role,level,contract,position,language)=>{
   let res;
   try{
        const newJob=await JobModel.create({company,postedAt,city,location,role,level,contract,position,language})
        res={message:"Successful"}
   }catch(e){
       res={message:e.message}
   }
   return res
} 

const getJobs=async()=>{
    let res;
    try{
       const data=await JobModel.find()
       res={message:"Successful",data:data}
    }catch(e){
       res={message:e.message}
    }
    return res
}
module.exports={postJobs,getJobs}