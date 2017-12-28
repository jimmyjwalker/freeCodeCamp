function destroyer(arr) {
  var newArr = Array.prototype.slice.call(arguments);
    console.log("newArr="+newArr);
  var target = newArr[0];
    console.log("target="+target);
  var argOnly = newArr;
  argOnly.shift(); //remaining values in arr afte removing arguments
    console.log("argOnly="+argOnly);
  var finalArr = [];
  
  for(var i = 0; i < target.length; i++){
    for(var j = 0; j < argOnly.length; j++){
      if(target[i] === argOnly[j]){
        console.log("target[i]="+target[i]+"   argOnly="+argOnly[j]);
        delete target[i];
      }
    }
  }
  
  
  return target.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
