function countAllFromTown(regNumber, regNoStartString){
  var regNumberList = regNumber.split(',');
  var count = 0;
  for(i = 0; i < regNumberList.length; i++){
    var regNumb = regNumberList[i].trimLeft().substring(0, 2);
     if(regNumb == regNoStartString){
         count++;
     }
  }

 return count;

}
