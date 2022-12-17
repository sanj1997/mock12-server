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

const getJobs=async(req)=>{
    const {sortBy="postedAt",order="asc",page=1,limit=10,q}=req.query
    let res;
    try{
        if(q!=undefined)
        {
           const data=await JobModel.find({language:{$regex:q,$option:"i"}})
           res={message:"Successful"}
        }
        else
        {
            const data=await JobModel.find().sort({[sortBy]:order=="asc"?1:-1}).skip((page-1)*10).limit(limit)
            res={message:"Successful",data:data}
        }
       
    }catch(e){
       res={message:e.message}
    }
    return res
}
module.exports={postJobs,getJobs}