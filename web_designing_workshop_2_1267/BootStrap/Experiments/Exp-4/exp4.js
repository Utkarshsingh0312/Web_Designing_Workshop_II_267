function calculateResult() {

let numSubjects = parseInt(document.getElementById("numSubjects").value);

if (isNaN(numSubjects) || numSubjects <= 0 || numSubjects > 12) {
alert("Enter number between 1 and 12");
return;
}

let totalMarks = 0;
let marksArray = [];

for (let i = 1; i <= numSubjects; i++) {

let input = prompt("Enter marks for Subject " + i);

if (input === null) return;

let mark = parseFloat(input);

if (isNaN(mark) || mark < 0 || mark > 100) {
alert("Enter marks between 0 and 100");
return;
}

marksArray.push(mark);
totalMarks = totalMarks + mark;
}

let averageMarks = totalMarks / numSubjects;
averageMarks = parseFloat(averageMarks.toFixed(2));

let grade;
let gradeClass;

if (averageMarks >= 90) {
grade = "A";
gradeClass = "text-success";
}
else if (averageMarks >= 75) {
grade = "B";
gradeClass = "text-primary";
}
else if (averageMarks >= 60) {
grade = "C";
gradeClass = "text-warning";
}
else if (averageMarks >= 40) {
grade = "D";
gradeClass = "text-secondary";
}
else {
grade = "F";
gradeClass = "text-danger";
}

let resultStatus;
let resultClass;

if (averageMarks >= 40) {
resultStatus = "PASS";
resultClass = "text-success";
}
else {
resultStatus = "FAIL";
resultClass = "text-danger";
}

let resultBox = document.getElementById("resultBox");

resultBox.innerHTML = `
<h5 class="mb-3">Result Summary</h5>

<div class="d-flex justify-content-between">
<span>Subjects</span>
<span>${numSubjects}</span>
</div>

<div class="d-flex justify-content-between">
<span>Total Marks</span>
<span>${totalMarks}</span>
</div>

<div class="d-flex justify-content-between">
<span>Average</span>
<span>${averageMarks}</span>
</div>

<div class="d-flex justify-content-between">
<span>Grade</span>
<span class="${gradeClass}">${grade}</span>
</div>

<div class="d-flex justify-content-between">
<span>Result</span>
<span class="${resultClass}">${resultStatus}</span>
</div>
`;

resultBox.classList.remove("d-none");
}