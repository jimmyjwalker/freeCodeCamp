
function largestOfFour(arr) {
  var large0 = 0;
  var large1 = 0;
  var large2 = 0;
  var large3 = 0;
  var largeVal = 0;
  var largestArr = [];
  
  console.log( arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3] + " ");
  
      for(var j = 0; j <= 3; j++){
        if(arr[0][j] > large0){
          large0 = arr[0][j];

          }
      }
      console.log(large0);
  
      for(var k = 0; k <= 3; k++){
        if(arr[1][k] > large1){
          large1 = arr[1][k];

          }
      }
      console.log(large1);
      for(var l = 0; l <= 3; l++){
        if(arr[2][l] > large2){
          large2 = arr[2][l];

          }
      }
      console.log(large2);
      for(var m = 0; m <= 3; m++){
        if(arr[3][m] > large3){
          large3 = arr[3][m];

          }
      }
      console.log(large3);
  
  
  largestArr = [large0,large1,large2,large3,];
  console.log(largestArr);
  return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

