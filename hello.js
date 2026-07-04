console.log("How are you?");
function getGrade(marks) {
    if (marks >= 90)
        return 'A';
    else if (marks >= 75 && marks <= 89)
        return 'B';
    else if (marks >= 50 && marks <= 74)
        return 'C';
    else
        return 'Fail';
}

let marks = 82;
let mark=40;
let grade1 = getGrade(marks);
let grade2 = getGrade(mark);

console.log("Marks:", marks);
console.log("Grade:", grade1);
console.log("Marks:", mark);
console.log("Grade:", grade2);
