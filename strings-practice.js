function makeAbba(a, b) {
return a + b + b + a;
}

function comboString(a,b) {
  if(a.length > b.length){
    return a + b + a;
}
return a + b + a;
}
function lastTwo(str) {
  if(str.length >= 2) {
  let lastChar = str.charAt(str.length -1);
  let secondLastChar = str.charAt(str.length -2);
  let firstPart = str.substring(0, str.length -2);
  return firstPart + lastChar + secondLastChar;
}
return str;
}

console.log(makeAbba("hey", "yo"));
console.log(comboString("sad" , "happy"));
console.log(comboString("happy", "sad"));
