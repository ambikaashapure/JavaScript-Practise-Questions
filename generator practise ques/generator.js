function* rangeIterator(start=0, end=10, step=1) {
    let current = start;
    while (current < end) {
      yield current;
      current += step;
    }
  }
   
  const iterator = rangeIterator();
  console.log("Sequence:");
  for (const value of iterator) {
    console.log(value);
  }

  
  
  