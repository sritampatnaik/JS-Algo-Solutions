function reverseAlgo(num){
  var is_negative = false;
  var digit = 0 ; 
  var result = 0;
  if(num < 0 ){
    is_negative = true; 
    num = -num;
  } 
  
  while(num !== 0){
    digit = num % 10;
    num = Math.floor(num / 10);
    result = (result * 10) + digit;
  }
  
  if(is_negative){
    result = -result;
  }
  return result;
}

function reverseUsingJSFunc(num){
  var x = num;
  var y = x.toString();
  var z = y.split("").reverse().join("");
  var aa = Number(z);
  return aa;
}


console.log(reverseAlgo(98765));
