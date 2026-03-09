console.log("Hello, World!");
console.log("we are arthimetical operators");

let a = 100;
let b = 20;

let c = a + b;
console.log("addition of two number")
console.log(c);

let d = a - b;
console.log("subtraction of two number")
console.log(d);

let e = a * b;
console.log("multiplication of two number")
console.log(e);

let f = a / b;
console.log("division of two number")
console.log(f);
// const btn = document.getElementById("submitBtn");

// btn.addEventListener("click", () => {
//   console.log("clicked");
// });
// inp.addEventListener("input", (event) => {
//   console.log("User is typing:", inp.value);
// });

let class1Students = ["mahesh", "suresh", "ramesh", "suresh", "Prasad", "suresh", "suresh"];
let Count = 0;

console.log(class1Students.length);// array declaration

for (let i = 0; i < class1Students.length; i++)
  if (class1Students[i] === "Prasad") {
    Count++;
  }
console.log(Count);

function addNumbers(number1, number2) {
    let sum = number1+number2;
    console.log("The sum of the two numbers is:", sum);
}
//calling the function
addNumbers(10, 20);
addNumbers(20, 30);
addNumbers(30, 40);
addNumbers(40, 50);
addNumbers(50, 60);
addNumbers(60, 70);
addNumbers(70, 80);
addNumbers(80, 90);
addNumbers(90, 100);
addNumbers(100, 110);

  //Array
let students = ["mahesh", "suresh", "ramesh", "suresh"];
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
 
let marks = [10, 20, 30, 40, 50];
console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

let emails =["anil@gmail.com", "suresh@gmail.com", "tejaswari@gmail.com", "prasad@gmail.com"]
let password = ["anil123", "suresh123", "tejaswari123", "prasad123"]
function login(email, password) {
    if (emails.includes(email)) {
      if (password.includes(password)) {
        console.log("Login successful");
      } else {
        console.log("invalid password")
    }
  }
}
login("tejaswari@gmail.com", "tejaswari123");

let fruits = ["apple", "banana", "orange", "grape", "mango"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);
console.log(fruits.push("kiwi"));
console.log(fruits.pop());
console.log(fruits.includes("apple"));

let name ='Tejaswari';
console.log(name.toUpperCase());
console.log(name.length);
console.log(name.includes("Teja"));
console.log(name.split("a"));

let student = { name:'Tejaswari', age: 21, city: 'Hyderabad' };
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.city);
let car = { brand: "Toyota", model: "Camry", price: 30000 };
console.log(car.brand);
console.log(car.color='white');
console.log(car.price=25000);

let students = ['mahesh', 'suresh', 'ramesh', 'prasad'];
for(let i=0; i<students.length; i++){
    console.log(students[i]);
}
let vowels = ['a', 'e', 'i', 'o', 'u'];
for(let i=0; i<vowels.length; i++){
    console.log(vowels[i]);
}
console.log("number of vowels:",count);
let employee = { name: 'harikrishna', age: 30, deparment: 'pharma' };
for(let key in employee){
    console.log(key, employee[key]);
}
let students =[
  {name:'teja', age: 21, city: 'hyderabad'},
  {name:'suresh', age: 22, city: 'bangalore'},
  {name:'ramesh', age: 24, city: 'mumbai'}
]
for(let i=0; i<students.length; i++){
    console.log(students[i].name);
    console.log(students[i].age);
    console.log(students[i].city);
}

let number = 9;
if(number % 2 === 0){
    console.log("The number is even");
}
else{
    console.log("The number is odd");
}
let age = 22;
if(age >= 18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}
let a = 10;
let b = 20;
let c = 30;
let largest;
if(a > b && a > c){
    largest = a;
}
else if(b > a && b > c){
    largest = b;
}
else{
    largest = c;
}
console.log("The largest number is:", largest);
let marks = 85;
let grade;
if(marks >= 90){
    grade = 'A';
}
else if(marks >= 80){
    grade = 'B';
}
else if(marks >= 70){
    grade = 'C';
}
else{
    grade = 'D';
}
console.log("The grade is:", grade);
for(let i=1; i<=10; i++){
    console.log(i);
}
let sum = 0;
for(let i=1; i<=5; i++){
    sum += i;
}
console.log("The sum is:", sum);
let









