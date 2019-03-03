module.exports = function check(str, bracketsConfig) {
  // your solution
  var status = true;
  var checkStatus = 0;
  var buffer=[];
  for (i = 0; i < bracketsConfig.length; i++){
    buffer[i]=0;
  }
  for (j =0; j < str.length; j++){
    for (i = 0; i < bracketsConfig.length; i++){
      var index=bracketsConfig[i].indexOf(str[j]);
      if ((index > -1)&(index%2==0)){
        buffer[i]++;
      }
      if ((index > -1)&(index%2==1)){
        buffer[i]--;

        if (buffer[i] < 0){
          status = false;
        }
      }
    }
  }
  buffer.forEach(function(val){
   if (val != 0){
     status = false;
   }
  });
 return status;
};
