
function palindrome(str) {
  console.log(str);
  var noWilds = "";
  var strArr=[];
  var newArr=[];
  var bool = true;
  str = str.toLowerCase(str);
  noWilds = str.replace(/[^0-9^a-z]/gi, '');

  for(var j=0; j < (noWilds.length)/2+1; j++){
    console.log(noWilds + " - j="+noWilds[j] + " k=" + noWilds[noWilds.length-(j+1)]);
    if(noWilds[j] != noWilds[noWilds.length-(j+1)]){
      bool=false;
      console.log(" if-" + bool);
    } 
  } 
  return bool;
}
palindrome("eye");
