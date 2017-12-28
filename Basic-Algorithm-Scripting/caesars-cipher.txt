function rot13(str) { // LBH QVQ VG!
  var decodeArr = [];
  var newArr = [];
  var a = 0;
  var newStr = "";
  
  for(var i = 0; i < str.length; i++){
    a = str.charCodeAt(i);
    //console.log(a);
    if(a >= 65 && a <= 90){
      newArr.push(a+13);
    } else {
      newArr.push(a);
    }
    //console.log(a+" "+newArr);
  }
  
  for(var j = 0; j < newArr.length; j++){
    var strVal = newArr[j];
      if(strVal > 90){
        strVal = strVal-26;
      }
    newStr = newStr+(String.fromCharCode(strVal));
  }
  

  return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

