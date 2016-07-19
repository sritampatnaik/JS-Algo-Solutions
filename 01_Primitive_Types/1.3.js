function findUnique(array){
  if (array.length == 1) return array[0];
  
  var i = 0;
  var unique_number = array[i];
  
  while(i < array.length) {
    i++;
    var unique_number = unique_number ^ array[i];
  }
  
  return unique_number;
}


console.log(findUnique([1,2,3,4,1,2,3]));
