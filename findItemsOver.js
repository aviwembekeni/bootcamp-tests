function findItemsOver(items,threshold ){
  var results = [];
  for(i=0; i<items.length; i++){
    if(items[i].qty > threshold){
       results.push(items[i]);

     }
  }
  return results;
}