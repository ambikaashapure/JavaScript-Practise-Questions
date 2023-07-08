//Solution to question 4

let age = prompt("Enter you age");

if(age < 18){
    console.log("You're too young to be in here!");
}
else if( age >= 18 && age <=21){
    console.log("Come on in but no drinking!");
}
else if(age >21 && age<=75){
    console.log("Come on in!");
}
else if ( age>75){
    console.log("Are you sure you want to be here?")
}
else{
    console.log("Please enter a valid age");
}