
function titleCase(str) {
  var strArr = [];
  var wordArr = [];
  var word = "";
  var newStr = "";
  var lastWord = "";
  var NewStr = "";
  // set str to lowercase
  str = str.toLowerCase();
  //separate str into array of words
  strArr = str.split(" ");
  console.log("strArr = "+strArr);
  
  //pull each word in strArr and capitalize first letter
  for (var i = 0; i < strArr.length; i++){
    
    wordArr = strArr[i].split("");
    console.log("wordArr = "+wordArr);
    var firstLtr = wordArr[0];
    firstLtr = firstLtr.toUpperCase();
    console.log("firstLtr = " + firstLtr);
    wordArr.shift();
    console.log("shifted wordArr = "+wordArr);
    wordArr.unshift(firstLtr);
    console.log("unshifted wordArr = "+wordArr);
    //rebuild word as newWord with first letter capitalized
    for(var j = 0, newWord = ""; j < wordArr.length; j++){
      newWord = newWord + wordArr[j];
      
      if (j == wordArr.length-1){
        lastWord = newWord;
        if (i != strArr.length-1){
          lastWord = lastWord + " ";
        }
        newStr = newStr + lastWord;
        console.log("!newStr = " + newStr);
      }
    } 
    
    //newStr = newStr + " " + newWord;
  }console.log("**New str**");
  return newStr;
}

titleCase("I'm a little tea pot");
