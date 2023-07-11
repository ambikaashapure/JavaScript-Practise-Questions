let arr = [8, 65, 90, 43, 23];

//Add an element to the back of an array
arr[5] = 100;
console.log(arr);

//Remove an element from the back of an array.
arr.length = arr.length - 1;
console.log(arr);

//Add an element to the front of an array.
arr[0] = 99
console.log(arr);

//Remove an element from the front of an array
for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
}
arr.length = arr.length - 1;
console.log(arr);

//Concatenates all the elements in an array into a string.
let arr2 = ['s', 'o', 'n', 'a'];
let str = " ";
for (let i in arr2) {
    str = str + arr2[i]
}
console.log(str);

//Separates the characters of a string into an array.
let arr3 = [];
arr3[0] = "am bi ka";
console.log(arr3);
