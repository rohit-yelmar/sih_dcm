import Case from "../models/Case.js";


//Create
export const createCase = async (req,res)=>{
    try {
        const {userId,name,caseId,location,picturePath,issues,laws,lawType,courtType,petitioners,respondents} = req.body;
        const newCase = new Case({
            userId,name,caseId,location,picturePath,issues,laws,lawType,courtType,petitioners,respondents
        })
        await newCase.save();
        const cases = await Case.find();
        res.status(201).json(cases);


    } catch (error) {
        res.status(409).json({msg:error.message})
    }
}
export const getUserCases = async (req,res)=>{
    try {
        const {userId} = req.params;
        const cases = await Case.find({userId})
        res.status(200).json(cases)
    } catch (error) {
        res.status(409).json({msg:error.message})
    }
}