"use strict";

// Event Listener
let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", saveData);

// Saves employee data to localStorage
function saveData() {
    let firstName = document.getElementById("firstName").value.trim();
    let middleName = document.getElementById("middleName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let ssn = document.getElementById("ssn").value.trim();
    let address1 = document.getElementById("address1").value.trim();
    let city = document.getElementById("city").value.trim();
    let state = document.getElementById("state").value.trim();
    let zip = document.getElementById("zip").value.trim();
    let dob = document.getElementById("dob").value.trim();
    let hireDate = document.getElementById("hireDate").value.trim();
    let currentPosition = document.getElementById("currentPosition").value.trim();
    let department = document.getElementById("department").value.trim();
    let homePhone = document.getElementById("homePhone").value.trim();
    let workPhone = document.getElementById("workPhone").value.trim();
    let cellPhone = document.getElementById("cellPhone").value.trim();
    let email = document.getElementById("email").value.trim();
    
    // Check if required fields are empty
    if (firstName === '' || lastName === '' || ssn === '' || address1 === '' || city === '' || state === '' || zip === '' || dob === '' || hireDate === '' || currentPosition === '' || department === '' || homePhone === '' || cellPhone === '' || email === '') {
        alert('Please fill in all required fields.');
        return;
    } else{
        window.location.href="confirmation.html";
    }

    // Employee object
    let employee = {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        ssn: ssn,
        address1: address1,
        address2: address2,
        city: city,
        state: state,
        zip: zip,
        dob: dob,
        hireDate: hireDate,
        currentPosition: currentPosition,
        department: department,
        homePhone: homePhone,
        workPhone: workPhone,
        cellPhone: cellPhone,
        email: email
    };

    // Get the employees array from localStorage
    let employees = JSON.parse(localStorage.getItem('employees')) || [];

    // Add the new employee to the array
    employees.push(employee);

    // Save the updated employees array back to localStorage
    localStorage.setItem('employees', JSON.stringify(employees));

}
