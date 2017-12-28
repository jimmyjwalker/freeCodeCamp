
function chunkArrayInGroups(arr, size) {

  var x = arr.length/size; //rows
  var i=0;
  var newArr = []; //columns
  
    for(i=0, k=0; i < x; i++){//rows
      var holdArr = arr.slice(k,k+size);
      newArr[i] = holdArr;
      k+=size;
      
    }
console.log(newArr);
  //console.log("arr=" + arr + " newArr=" + newArr + "size=" + size); 
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);

