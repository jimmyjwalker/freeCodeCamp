
function mutation(arr) {
  var allLetters = true;
  var findAll = arr[1];
  var isIn = arr[0];
  var findAllArr = [];
  
  findAll = findAll.toString();
  isIn = isIn.toString();
  findAll = findAll.toLowerCase();
  isIn = isIn.toLowerCase();
  
  findAllArr = findAll.split("");
  
  console.log("findAll="+findAll+"  isIn="+isIn+"  findAllArr="+findAllArr);
  for(var i = 0; i<findAllArr.length; i++){
    if(!(isIn.includes(findAllArr[i]))){
       allLetters=false;
       }
  }
  return allLetters;
  
}

mutation(["hello", "hey"]);

