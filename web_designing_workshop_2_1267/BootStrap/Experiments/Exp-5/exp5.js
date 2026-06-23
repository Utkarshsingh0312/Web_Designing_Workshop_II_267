let employees = [];

function addEmployee() {

  let name = document.getElementById("name").value;
  let empId = document.getElementById("empId").value;
  let salary = parseFloat(document.getElementById("salary").value);
  let dept = document.getElementById("dept").value;

  if (name === "" || empId === "" || isNaN(salary) || dept === "") {
    alert("Please fill all fields properly");
    return;
  }

  let employee = {
    name: name,
    id: empId,
    salary: salary,
    department: dept
  };

  employees.push(employee);

  alert("Employee Added Successfully!");

  document.getElementById("name").value = "";
  document.getElementById("empId").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("dept").value = "";
}

function displayEmployees() {

  if (employees.length === 0) {
    document.getElementById("output").innerHTML =
    "<div class='card'>No Employees Found</div>";
    return;
  }

  let output = `
  <h3>All Employees</h3>

  <table>
  <tr>
    <th>Name</th>
    <th>ID</th>
    <th>Salary</th>
    <th>Department</th>
  </tr>`;

  employees.forEach(emp => {

    output += `
    <tr>
      <td>${emp.name}</td>
      <td>${emp.id}</td>
      <td>₹${emp.salary}</td>
      <td>${emp.department}</td>
    </tr>`;
  });

  output += "</table>";

  document.getElementById("output").innerHTML = output;
}

function filterSalary() {

  let filtered = employees.filter(emp => emp.salary > 50000);

  if (filtered.length === 0) {

    document.getElementById("output").innerHTML =
    "<div class='card'>No employees above ₹50,000</div>";

    return;
  }

  let output = `
  <h3>Salary > ₹50,000</h3>

  <table>
  <tr>
    <th>Name</th>
    <th>Salary</th>
  </tr>`;

  filtered.forEach(emp => {

    output += `
    <tr>
      <td>${emp.name}</td>
      <td>₹${emp.salary}</td>
    </tr>`;
  });

  output += "</table>";

  document.getElementById("output").innerHTML = output;
}

function totalSalary() {

  let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

  document.getElementById("output").innerHTML =
  `<div class="card">Total Salary: ₹${total}</div>`;
}

function averageSalary() {

  if (employees.length === 0) {

    document.getElementById("output").innerHTML =
    "<div class='card'>No employee records</div>";

    return;
  }

  let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

  let avg = total / employees.length;

  document.getElementById("output").innerHTML =
  `<div class="card">Average Salary: ₹${avg.toFixed(2)}</div>`;
}

function countDepartment() {

  let deptName = prompt("Enter Department Name:");

  let count = employees.filter(
    emp => emp.department === deptName
  ).length;

  document.getElementById("output").innerHTML =
  `<div class="card">${deptName} Department: ${count} Employees</div>`;
}