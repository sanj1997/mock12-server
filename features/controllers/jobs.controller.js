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
module.exports={postJobs}