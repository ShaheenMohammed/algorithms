//fins max sum of a sorted array

function maxSubarraySum(arr,end){
    let maxSum =0,tempSum,length=arr.length-end;
    if(length<=0) return null
  
    for (let index=0;index<end;index++)maxSum+=arr[index];
     tempSum=maxSum;
    for (let index = 0;  index< length; index++) {
      tempSum=tempSum-arr[index]+arr[end];
      if(maxSum<tempSum)
      {
        maxSum=tempSum;
      }
      end++;
    }
  
     return maxSum;
  }