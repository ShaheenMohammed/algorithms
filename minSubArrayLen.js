

//Find the smallest contiguous subArray to be greater or equal to minSum
function minSubArrayLen(arr,minSum){

  let bigNum=0,start=0,end=0;
  let addRight,addLeft;

  for (let index = 0; index < arr.length; index++) {
    let tempBigNum=arr[index];
    if(tempBigNum>bigNum) 
    {
      bigNum=tempBigNum;
      start=index;
      end=index;
    }   
  }
  for (let index = 0; index < arr.length; index++) {
    if(bigNum>=minSum)
    {
      return (end-start+1);
    }
    
    addRight=arr[end+1];
    addLeft=arr[start-1];
    if(addRight>addLeft)
    {
      bigNum+=addRight;
      end++;
    }
    else{
      bigNum+=addLeft;
      start--;
    }
  }
    return 0;

  
  }