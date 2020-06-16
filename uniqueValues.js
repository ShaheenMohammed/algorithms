// Finds unique value in a sorted aray
function uniqueValues(arr)
{
  let count =0;
  let pointer=0,initial=0;

  while(pointer<=arr.length)
  {
    if(arr[pointer]===arr[initial])
    {
      pointer++;
    }
    else{
      initial=pointer;
      count++;
    }
  }

  return count;
}

console.log(uniqueValues([1,1,1,1,1,1,1,2]));
console.log(uniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(uniqueValues([]));
console.log(uniqueValues([-2,-1,-1,0,1]));