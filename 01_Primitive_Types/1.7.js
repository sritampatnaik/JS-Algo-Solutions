function parity(num){
  if(num === 0) return 0;
  if(num === 1) return 1; 
  
  var count = 0;
  if (num < 0) {
    num = -num;
    count += 1;
  }

  while (num !== 0) {
    count += 1;
    num = num & (num - 1);
  }
  return count;

}


console.log(parity(9));
