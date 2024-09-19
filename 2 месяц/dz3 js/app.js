let controlPoints = [40, 55, 22, 89, 14, 78, 56, 47, 59];

for (let i = 0; i < controlPoints.length; i++) {
  let number = controlPoints[i];
  let grade;
  if (number <= 20) {
    grade = 1;
  } else if (number <= 40) {
    grade = 2;
  } else if (number <= 60) {
    grade = 3;
  } else if (number <= 80) {
    grade = 4;
  } else if (number <= 100) {
    grade = 5;
  }
  console.log(number + " is " + grade);
}

let num = prompt("enter number");
for (let i = 1; i <= 10; i++) {
  console.log(num + " * " + i + " = " + num * i);
}
