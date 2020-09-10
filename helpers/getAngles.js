/*const express = require("express");
var xmlhttp = new XMLHttpRequest();  
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    //var myObj = JSON.parse(this.responseText);
  }
};
*/

//---------------------------------------------------

//Sample JSON object used for testing purposes
var myObj = JSON.parse('{"testName":"test1","rightEar":[50,70],"rightElbow":[50,60],"rightShoulder":[0,0],"rightWrist":[80,60],"rightHip":[50,70],"rightKnee":[50,70],"rightAnkle":[50,70]}')

function getAngles(jt1,jt2,jt3) {
  var v1 = [jt1[0]-jt2[0],jt1[1]-jt2[1]]
  var v2 = [jt3[0]-jt2[0],jt3[1]-jt2[1]]
  var len1 = Math.sqrt(v1[0]*v1[0] + v1[1]*v1[1])
  var len2 = Math.sqrt(v2[0]*v2[0] + v2[1]*v2[1])
  var dotProd = v1[0]*v2[0] + v1[1]*v2[1]
  return ((Math.acos(dotProd/(len1*len2))*180)/Math.PI).toFixed(4)
}

//Main JS object
var jointAngles = {
  "testName":myObj.testName,
  "headAngle":0,
  "elbowAngle":0,
  "hipAngle":0,
  "kneeAngle":0
}

//Function calls 
jointAngles.headAngle = getAngles(myObj.rightEar,myObj.rightShoulder,myObj.rightHip)
jointAngles.elbowAngle = getAngles(myObj.rightShoulder,myObj.rightElbow,myObj.rightWrist)
jointAngles.hipAngle = getAngles(myObj.rightShoulder,myObj.rightHip,myObj.rightKnee)
jointAngles.kneeAngle = getAngles(myObj.rightHip,myObj.rightKnee,myObj.rightAnkle)

//Console print and conversion of JS object to JSON data
console.log(jointAngles)
JSON.stringify(jointAngles)
