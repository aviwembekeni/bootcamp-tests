function totalPhoneBill(callsAndSmses){
   var callsAndSmsesList = callsAndSmses.split(',');
   var total = 0;

  for(var i=0; i < callsAndSmsesList.length; i++){
     if(callsAndSmsesList[i].trimLeft() === 'call'){
       total += 2.75;
     }else
       if(callsAndSmsesList[i].trimLeft() === 'sms'){
        total += 0.65;
       }
  }

  return "R"+total.toFixed(2);
}
