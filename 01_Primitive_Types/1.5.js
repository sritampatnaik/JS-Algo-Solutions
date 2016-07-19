//Iterative no extra space used
function fibo(n){
  if (n === 0 || n === 1) return n;

  var i = 2;
  var current = 1;
  var prev = 0;
  var fib;
  
  while ( i <= n ) {
    fib = current + prev; 
    prev = current;
    current = fib;
    i++;
  } 
  return fib;
}


console.log(fibo(5));
