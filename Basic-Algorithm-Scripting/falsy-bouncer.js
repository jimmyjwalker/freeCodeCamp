function bouncer(arr) {
  
  arr = arr.filter(Boolean);
  console.log(arr);
  return arr;
}

bouncer([false, null, 0, NaN, undefined, ""]);
