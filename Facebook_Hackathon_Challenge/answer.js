function numberOfPairs(a, k) {
  var map = {}, count = 0;

  for (var i = 0; i < a.length ; i++) {
    map[a[i]] = i;
  }
 
  for (var j = 0;  j < a.length; j++) {    
    if(k-a[j] in map){
     if(a[j] == k/2 && j == map[a[j]]) {
       delete map[a[j]];
     } else {
       delete map[a[j]];
       delete map[k-a[j]];
       count++; 
     }
    } 
  }
  console.log (count) ; 
}

numberOfPairs([1,3,46,3,9,23,23],46);
