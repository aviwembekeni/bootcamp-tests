function findItemsOver20(items){
  var results = [];
  for(i=0; i<items.length; i++){
    if(items[i].qty > 20){
       results.push(items[i]);

     }
  }
  return results;
}
