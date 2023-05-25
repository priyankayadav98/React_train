
function newalert() { 
let newvar = document.getElementById("fname").value
console.log(newvar)
let lastvar = document.getElementById("lname").value
console.log(lastvar)
    alert("Full name: " + newvar + " " + lastvar)
    return
}