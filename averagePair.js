///check to see if average pair within sorted array
function averagePair(arr,num)
{
    let start = 0,end=arr.length-1;
while(start<end)
{
  let average = (arr[start]+arr[end])/2;
  if(average===num)
  {
    return true;
  }
  else if (average<num)
  {
    start++;
  }
  else end--;

}
  return false;
}