
function repeatStringNumTimes(str, num) {
  // repeat str num times
  //return empty string of num is not a positive number
  
  var newStr = "";
  
  if(num < 1){
    return newStr;
  } else {
    for(var i = 0; i < num; i++){
      newStr = newStr + str;
      console.log("newStr=" + newStr);
    }
  }
  console.log("str="+str + "  num=" + num + "  newStr=" + newStr);
  
  
  return str;
}

repeatStringNumTimes("abc", 3);

