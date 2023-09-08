import mongoose from "mongoose";

const caseSchema = mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    caseId:{
        type:String,
        required:true,
    },
    location: String,
    picturePath: String,
    issues: Number,
    laws: Number,
    lawType: String,
    courtType: String,
    petitioners:Number,
    respondents:Number,

})
const Case = mongoose.model("Case",caseSchema);
export default Case;