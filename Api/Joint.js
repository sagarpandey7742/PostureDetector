const express = require('express');
const mongoose = require('mongoose');
const Joint = require('../DB/Joint');
const route = express.Router();

route.post('/', async(req,res) =>{
    const{testName,
        nose,
        leftEye,
        rightEye,
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
        rightKnee,
        leftAnkle,
        rightAnkle} = req.body;
        
    let joint ={};

    joint.testName=testName;
    joint.nose=nose;
    joint.leftEye=leftEye;
    joint.rightEye=rightEye;
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
    joint.leftAnkle=leftAnkle;
    joint.rightAnkle=rightAnkle;

    let jointModel = new Joint(joint);
    await jointModel.save(); 

    res.json(jointModel);
});

module.exports = route;