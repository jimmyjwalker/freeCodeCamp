function findLongestWord(str) {
  //convert str to array elements separated by spaces
  var strArr = str.split(" ");
  console.log(strArr);
  var val = 1;
  var longest = 0;

  //count each word length
  //assign word to value, if next word is longer reassign value

  for(var i = 0; i < strArr.length; i++){  
    console.log("strArr[" + i + "]= " + strArr[i] + " " + "strArr[" + j + "]= " + strArr[j] + " val="+val);
    if (strArr[i].length > strArr[val].length){

      console.log("strArr[i].length= " + strArr[i].length + " " + " is >  strArr[val].length = " + strArr[val].length);

      val = i;

      console.log(" val="+val);
    }
  }

  longest = strArr[val].length;
    console.log("strArr[val].length = " + strArr[val].length);
  return longest;

}

?

findLongestWord("The quick brown fox jumped over the lazy dog");

