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

