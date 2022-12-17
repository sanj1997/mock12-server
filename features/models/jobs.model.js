const {Schema,model} =require("mongoose")

const JobsSchema=new Schema({
        company:{type:String},
        postedAt:{type:String},
        city:{type:String},
        location:{type:String},
        role:{type:String},
        level:{type:String},
        contract:{type:String},
        position:{type:String},
        language:{type:String}
})

const JobModel=model("job",JobsSchema)
module.exports=JobModel