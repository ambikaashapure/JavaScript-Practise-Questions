function* powerseries(num1,num2){
    let start = num1
    while(start<10){
        yield start**num2;
        start=start+1;
    }
  }

const myobj = powerseries(3,2);
for(const value of myobj){
    console.log(value);
}