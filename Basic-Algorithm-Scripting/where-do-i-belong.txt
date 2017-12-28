
function getIndexToIns(arr, num) {
  var index = 0;
  var i =0;
   
  console.log("arr="+arr);
  arr = arr.sort(function(a, b){return a-b});

  if(num >= arr[arr.length-1]){
    return arr.length;
  } else{

    while(i < arr.length){

        if(arr[i] >= num){
          index = i;
          console.log(arr + "  arr[i]="+arr[i] +"  num=" +num + "  " + "index=" + index);
          break;
      }
      i++;
    }
    console.log(arr + "  " + num + "  " + "index=" + index);

    return index;
    }
  }
getIndexToIns([2, 5, 10], 15);

