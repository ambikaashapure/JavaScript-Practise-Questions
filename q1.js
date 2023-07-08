//Solution to question 1

async function wait (){
    await new Promise(resolve => setTimeout(resolve, 4000));
    return 10;
}

function f() {

    wait().then(result => {
      console.log('Async function completed with result:', result);

    });
  }
f();

