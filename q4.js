//Solution to question 4


let age = prompt("Enter your age : ");

switch (true) {
    case age < 18:
        console.log("You're too young to be in here!");
        break;
    case age >= 18 && age <= 21:
        console.log("Come on in but no drinking!");
        break;
    case age > 21 && age <= 75:
        console.log("Come on in!");
        break;
    case age > 75:
        console.log("Are you sure you want to be here?");
        break;
    default:
        console.log("Please enter a valid age");
        break;
}
