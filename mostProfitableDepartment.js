var departmentList = [
  {'department' : 'hardware', sales : 0},
  {'department' : 'outdoor', sales : 0},
  {'department' : 'carpentry', sales : 0},
  {'department' : 'electronics', sales : 0}

]

function mostProfitableDepartment(data){
  departmentList[0].sales = 0;
  departmentList[1].sales = 0;
  departmentList[2].sales = 0;

  for(i=0; i<data.length; i++){

    departmentList.map(function(key, index) {
       if(data[i].department === key.department){
         key.sales += data[i].sales;
       }
  	 });

  }

  var popularDepartment = '';
  var popularDepCount = 0;
    for(i=0; i< departmentList.length; i++){

      if(departmentList[i].sales > popularDepCount){
       popularDepartment = departmentList[i].department;
       popularDepCount =  departmentList[i].sales;
      }
    }

  return popularDepartment;

}
