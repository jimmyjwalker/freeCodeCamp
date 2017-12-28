function reverseString(str) {
  var revStr = "";
  var strArr = str.split("");
  var revArr = [];
  strArr = strArr.reverse();
  for (var i = 0; i < str.length; i++){
      revArr.push(strArr[i]);
    console.log(revArr);
  }
  str = revArr.toString();
  for (var j = 0; j < str.length; j++){
    str = str.replace(",","");
  }

  console.log(str);
  return str;
  //return str;
}

reverseString("hello");
