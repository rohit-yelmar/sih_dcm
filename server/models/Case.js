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
    location:{type:String},
    picturePath:{type:String},
    issues:{type:String},
    laws:{type:String},
    lawType:{type:String},
    courtType:{type:String},
    petitioners:{type:String},
    respondents:{type:String},
    precedents:{type:String},

})
const Case = mongoose.model("Case",caseSchema);
export default Case;