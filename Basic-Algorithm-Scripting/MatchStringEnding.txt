
function confirmEnding(str, target) {
  // check if str ends with target
  
  var tL = target.length;
  var strL = str.length;
  var strEnd = str.substr(strL-tL,strL);
  var match = false;
  console.log("str= " + str + "  target= " + target + "  strEnd= " + strEnd);
  
  if(target == strEnd){
    match = true;
  }
  console.log(match);
  return str;
}

confirmEnding("Bastian", "n");

