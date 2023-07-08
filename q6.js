//Solution to question 6

var student = { name : "Jocob", sclass : "VI", rollno : 12 }; 

// to list the properties of a JavaScript object.
function property(obj){
    for (var i in obj){
        if (obj.hasOwnProperty(i)) {
            console.log(i);
          }
    }
}
property(student);
//to delete the rollno property from the following object.
console.log(student);
//after deletion
delete student.rollno;
console.log(student);

//to get the length of a JavaScript object\
var len = 0;
for( var i in student){
    
    if (student.hasOwnProperty(i)){
        len++;
    }
}
console.log(len);