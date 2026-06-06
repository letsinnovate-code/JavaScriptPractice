//give marks  90 >= A
//80 - 89 >= B
//70 - 79 >= C
//60 - 69 >= D
//50 - 59 >= E
//0 - 49 >= F

function calculateGrade(marks) {
  if (marks >= 90) {
    return "A";
  } else if (marks >= 80) {
    return "B";
  } else if (marks >= 70) {
    return "C";
  } else {
    return "D";
  }
}

let grade = calculateGrade(67);
console.log(grade);

console.log(calculateGrade(90));
