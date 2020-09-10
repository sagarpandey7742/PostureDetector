const express = require("express");
const Joint = require("../db/model.joint");
const route = express.Router();

//routes

route.get('/', getRecords);
route.post('/', addData);
route.post('/check', checkAngle);


async function checkAngle(req, res, next){

    const {testName, jointName, angle}= req.body;
    check({testName, jointName, angle})

    .then(isOk=>res.json(isOk))
    .catch(next)

}
async function check({testName, jointName, angle}){
    
    const test= await Joint.findOne({testName});
    if(!test) {return "Test not found";}
    console.log(test);
    if(angle in [test[jointName]]) 
        return "TRUE";
    return "FALSE";
}



async function getRecords(req, res, next){
    getAll()
    .then(recs=>res.json(recs))
    .catch(next);

}
async function getAll(){
    const record= await Joint.find();
    return record.map(x => details(x));
}

function details(x){
    const{testName,
        leftEar,
        rightEar,
        leftShoulder,
        rightShoulder,
        leftElbow,
        rightElbow,
        leftWrist,
        rightWrist,
        leftHip,
        rightHip,
        leftKnee,
        rightKnee
        
        } = x;
        return  {testName,
            leftEar,
            rightEar,
            leftShoulder,
            rightShoulder,
            leftElbow,
            rightElbow,
            leftWrist,
            rightWrist,
            leftHip,
            rightHip,
            leftKnee,
            rightKnee
            
            };
}




async function addData(req,res, next){
    const{testName,
        leftEar,
        rightEar,
        leftShoulder,
        rightShoulder,
        leftElbow,
        rightElbow,
        leftWrist,
        rightWrist,
        leftHip,
        rightHip,
        leftKnee,
        rightKnee
        } = req.body;
        
    let joint ={};

    joint.testName=testName;
    joint.leftEar=leftEar;
    joint.rightEar=rightEar;
    joint.leftShoulder=leftShoulder;
    joint.rightShoulder=rightShoulder;
    joint.leftElbow=leftElbow;
    joint.rightElbow=rightElbow;
    joint.leftWrist=leftWrist;
    joint.rightWrist=rightWrist;
    joint.leftHip=leftHip;
    joint.rightHip=rightHip;
    joint.leftKnee=leftKnee;
    joint.rightKnee=rightKnee;
    

    let jointModel = new Joint(joint);
    await jointModel.save(); 

    res.json(jointModel);
};

module.exports = route;