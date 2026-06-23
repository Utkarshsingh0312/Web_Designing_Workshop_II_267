let numbers = [1,2,3,4,5];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);


let mixedArray = [1 ,"Hello",true, {name: "Alice"}, [1,2,3]];

console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);
console.log(mixedArray[5]);
console.log(numbers.length);
console.log(mixedArray.length);


function greet(){
    console.log("Hello, World!");
}
greet();


function multiply(a,b){
    return a * b ;
}
console.log(multiply(23,43));


// function divide(a,b){
//     return a/b ;
// }
// console.log(divide(45,9));

let divide = function(a,b){
    return a/b;
}
console.log(divide(10,8));

let sayHi= () => console.log("Hi Utkarsh!");
sayHi();

let square = x => x*x;
console.log(square(5));

// const sum = (a,b)=> (a+b);
// console.log(sum(2,9));


let newarray = [1,2,3,4,5];
let squareArray = newarray.map((num) => num*5);
console.log(squareArray);

let evenNumbers = [1,2,3,4,5];
let filteredEvenNumbers = evenNumbers.filter(num => num % 2 === 0);
console.log(filteredEvenNumbers);

let sum = [1,2,3,4,5];
let total = sum.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
console.log(total);

let students = [
    {name : "Alice" , marks : 85},
     {name : "Bob" , marks : 89},
      {name : "Charlie" , marks : 95}
];

let marks = students.map(student => student.marks);
console.log(marks);


//object inside ARRAY.
let people = [
    {name: "Alice",age:25},
    {name: "Arsh",age:75},
    {name: "Aliya",age:15}
];
console.log(people[0]);
console.log(people[1].name);
console.log(people[2].age);


let company = {
    name: "Tech Crop",
    employees: ["Alice", "Bob", "Charlie"]
};

console.log(company.name);
console.log(company.employees[0]);
console.log(company.employees[2]);

//for of loop

for (let employee of company.employees) {
    console.log(employee + " works at " + company.name);

    // using template literal
    console.log(`${employee} works at ${company.name}`);
}

//for in loop
for (let key in company){
    console.log(key + ": " + company[key]);
}

//-->H.W.<--//

// ===== for...in examples =====

// 1. Object properties
let student = { name: "Utkarsh", age: 18 };
for (let key in student) {
    console.log(key + ": " + student[key]);
}

// 2. Array indexes
let arr = ["A", "B", "C"];
for (let index in arr) {
    console.log("Index:", index);
}

// 3. Object keys
let marks = { math: 90, science: 85, english: 88 };
for (let subject in marks) {
    console.log("Subject:", subject);
}

// 4. Sum object values
let prices = { apple: 100, banana: 50 };
let total = 0;
for (let item in prices) {
    total += prices[item];
}
console.log("Total:", total);


// ===== for...of examples =====

// 1. Array values
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

// 2. String characters
let name = "UTKARSH";
for (let char of name) {
    console.log("Char:", char);
}

// 3. Sum array values
let nums = [10, 20, 30];
let sum = 0;
for (let num of nums) {
    sum += num;
}
console.log("Sum:", sum);

// 4. Loop over array with condition
let numbers = [1, 2, 3, 4, 5];
for (let n of numbers) {
    if (n % 2 === 0) {
        console.log("Even:", n);
    }
}