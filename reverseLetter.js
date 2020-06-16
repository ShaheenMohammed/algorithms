//reverses any string inputted

function reverseLetter(letter){
  if(letter.length<=0) return "";
    return letter.slice(-1)+reverseLetter(letter.substring(0, letter.length - 1));
}