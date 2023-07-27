function* take(n, array) {
    let count = 0;
    for (const item of array) {
      if (count >= n) {
        break;
      }
      yield item;
      count++;
    }
  }
  
  function* naturalNumbers(start=1,end=Infinity,step=1){
   let current=start
    while(current<end){
        yield current;
        current+=step;
    }
  }

  function* powerseries(num1,num2){
    let start = num1
    while(true){
        yield start**num2;
        start=start+1;
    }
  }

  const n = 3;
  const array = ['a', 'b', 'c', 'd', 'e'];
  const generator = take(n, array);
  console.log(...generator);
  
  const generator2 =take(7,naturalNumbers())
  console.log(...generator2);

  const generator3 = take(5,powerseries(3,2))
  console.log(...generator3);