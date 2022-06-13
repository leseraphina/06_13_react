window.data ={
  allColor:['red','blue','brown','green','purple'],
  allSize:(function(small,large){
    let sized = []
    for(let i = small ; i <= large ; i++){
      sized.push(i);
      sized.push(i+0.5);
    }
    return sized;
  })(7,10),
  bySize:{
    '7':['red','green','purple'],
    '7.5':['red','brown','green'],
    '8':['brown','green','purple'],
    '8.5':['red','blue','purple'],
    '9':['red','blue','brown','green','purple'],
    '9.5':['red','brown','green','purple'],
    '10':['red','blue','green','purple'],
    '10.5':['red','blue','brown']
  },
  byColor:{
    'red':['7','9','9.5','10','10.5'],
    'blue':['8.5','9','9.5','10','10.5'],
    'brown':['7','8','8.5','9','10'],
    'green':['7','8','8.5','9.5','10.5'],
    'purple':['8','8.5','10','10.5']
  }
}