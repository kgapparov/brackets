  //jshint esversion:6
module.exports = function check(str, bracketsConfig) {
  // your solution


    // your solution
  var bracket = {
    lastBracket:[],
    expectingClose:[],
    openingBracket:[],
    closingBracket:[],
    openCount:0,
    closeCount:0
  };
  var index = -1;
  // getting pattern of open and close brackets
  for (i=0; i < bracketsConfig.length; i++){
    bracket.openingBracket.push(bracketsConfig[i][0]);
    bracket.closingBracket.push(bracketsConfig[i][1]);
  }
  for (j=0; j<str.length; j++){
    if ((bracket.lastBracket==[])&(bracket.closingBracket.includes(str[j]))){
      return false;
    }
    if (bracket.openingBracket.indexOf(str[j]) > -1){
      bracket.openCount ++;
      bracket.lastBracket = str[j];
      index = bracket.openingBracket.indexOf(str[j]);
      bracket.expectingClose.push(bracket.closingBracket[index]);
      continue;
    }
    if ((bracket.closingBracket.includes(str[j]))&(bracket.expectingClose[bracket.expectingClose.length-1] == str[j])) {
      bracket.closeCount++;
      bracket.expectingClose.pop();
      continue;
    }
     if ((bracket.closingBracket.includes(str[j]))&(bracket.expectingClose[bracket.expectingClose.length-1] != str[j])){
       return false;
     }
  }
  if (bracket.openCount == bracket.closeCount){
    return true;
  }
  else {
    return false;
  }
}
