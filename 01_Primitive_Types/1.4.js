function findNumberAppearingTwice(array){
  var highest_number = array[0];
  var total_sum = array[0];
  for(var i = 1; i < array.length; i++) {
    if(highest_number < array[i]) {
      highest_number = array[i];
    }
    
    total_sum += array[i];
  }
  var j = 0;
  var expected_sum = (highest_number * (highest_number+1))/2;
 
  return total_sum - expected_sum;
}


console.log(findNumberAppearingTwice([1,2,3,4,5,6,6]));
  