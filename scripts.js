
console.log("javascript sourced!")
let monthlyCost = 0;

function addEmployee(event) {
    event.preventDefault();
console.log("Function Started")

// grabbing user inpus 
let firstName = document.getElementById('firstName').value
let lastName = document.getElementById('lastName').value
let id = document.getElementById('id').value
let title= document.getElementById('title').value 
let annualSalary = document.getElementById('annualSalary').value

// need new user inputs to print on the table
// gathering strings that will be put into the tables
let newRow= `
<tr>
<td>${firstName}</td>
<td>${lastName}</td>
<td>${id}</td>
<td>${title}</td>
<td>${annualSalary}</td>
</tr>
`
// console.log("newRow is: ", newRow)

let table = document.getElementById("table")
table.innerHTML+=newRow



//footer and overbudget

// let footer=document.getElementById("theFooter")
// footer.innerHTML

// monthlyCost += annualSalary/12;

// if (monthlyCost > 20000) {
// ?


// clear form

firstName = document.getElementById('firstName').value=''
lastName = document.getElementById('lastName').value=''
id = document.getElementById('id').value=''
title= document.getElementById('title').value =''
annualSalary = document.getElementById('annualSalary').value=''

}
