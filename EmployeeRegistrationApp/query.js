// Get the employees array from localStorage
let employees = JSON.parse(localStorage.getItem('employees')) || [];

// Create an empty array to store the filtered employees
let filteredEmployees = [];

// Wait for the form to be submitted
document.getElementById("submit").addEventListener("click", () => {
  // Get the input values
  let employeeDepartment = document.getElementById("employeeDepartment").value.toLowerCase();
  let employeeState = document.getElementById("employeeState").value;
  let employeeHireDate = document.getElementById("employeeHireDate").value;
  let employeePosition = document.getElementById("employeePosition").value.toLowerCase();

  // Check if the input values are blank and set them to null if necessary
  if (employeeDepartment === "") {
    employeeDepartment = null;
  }
  if (employeeState === "") {
    employeeState = null;
  }
  if (employeeHireDate === "") {
    employeeHireDate = null;
  }
  if (employeePosition === "") {
    employeePosition = null;
  }

  // Loop through the employees array
  for (let employee of employees) {
    // Check whether the employee matches the input criteria
    if ((!employeeDepartment || employee.department.toLowerCase() === employeeDepartment) &&
        (!employeeState || employee.state === employeeState) &&
        (!employeeHireDate || employee.hireDate === employeeHireDate) &&
        (!employeePosition || employee.currentPosition.toLowerCase() === employeePosition)) {
      // Add the employee to the filteredEmployees array
      filteredEmployees.push(employee);
    }
  }

  // Save the filtered employees array back to localStorage
  localStorage.setItem('filteredEmployees', JSON.stringify(filteredEmployees));
});