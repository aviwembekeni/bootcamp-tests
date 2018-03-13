function countAllPaarl(regNumber){
  var regNumberList = regNumber.split(',');
  var count = 0;
  for(var i = 0; i < regNumberList.length; i++){
    var regNumb = regNumberList[i].trimLeft().substring(0, 2);
     if(regNumb == 'CJ'){
         count++;
     }
  }

 return count;

}
