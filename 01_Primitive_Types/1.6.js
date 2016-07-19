function isNumberPalindrome(num){
  //if no number return false
  if (typeof num == 'undefined') return "undefined";
  
  //if single digit retrun false
  if (Math.floor(num / 10) === 0 ) return "single";
  
  //declare a stack and copy number to different variable
  var stack = [];
  var num_copy = num;
  
  //loop push digits into stack in reverse order
  while (num_copy !== 0) {
    stack.push(num_copy % 10);
    num_copy = Math.floor(num_copy / 10);
  }

  
  //pop digits and compare with the num
  while(stack.length > 0){
    console.log(num);
        console.log(stack);

    var i = stack.pop();
     if (i === num % 10) {
       num = Math.floor(num / 10);
     } else {
       return false;
     }
  }
  
  return true;
}


console.log(isNumberPalindrome(12345));
