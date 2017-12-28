
function truncateString(str, num) {
  // truncate str to be num - 3 to allow addition of ... unless num is <= 3 unless num is >= str length, then return str.
  var sL = str.length;
  var trunc = "";
  
  if(num >= sL){
    return str;
  } else  if(num > 3){
    trunc = str.substr(0,num-3);
    trunc = trunc + "...";
    console.log("num >3-" +num + "str=" + str + " trunc=" + trunc);
  } else {
      trunc = str.substr(0,num);
      trunc = trunc + "...";
      console.log("num<=3-" +num + "str=" + str + " trunc=" + trunc);
  }
  
  return trunc;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

