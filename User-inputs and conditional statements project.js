//JavaScript

// User-Inputs and Conditional Statements !

// Getting Better in JavaScript Day by Day

 

function funct() {

 

let a = document.getElementById("que").value;

 

if(a == "12") {

 

document.getElementById("ans").innerHTML = "Correct, you are in class 12th !";

document.getElementById("ans").style.color = "green";

 

}

 

else if(a == "11") {

 

document.getElementById("ans").innerHTML = "Correct, you are in class 11th !"

document.getElementById("ans").style.color = "green";

 

}

 

else if (a == "") {

 

document.getElementById("ans").innerHTML = "Plz insert an Input !"

document.getElementById("ans").style.color = "black";

 

}

 

else {

 

document.getElementById("ans").innerHTML = "Incorrect Class inserted plz try again !"

document.getElementById("ans").style.color = "red";

 

}

 

}
