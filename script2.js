
// let dataReceived = ["first", "Second", "Third"];



let newElement = document.createElement("div");
let target = document.getElementById("site-title");


newElement.setAttribute("id", "title");
newElement.setAttribute("class", "section");

// let otherTarget = document.getElementsByClassName("section");
// otherTarget[0].setAttribute("class", "tab");


let newHeading = document.createElement("h2");
let headingText = document.createTextNode("This is a Site");
newHeading.appendChild(headingText);
newElement.appendChild(newHeading);

target.appendChild(newElement);

let newGreeting = document.getElementById("site-welcome");
newGreeting.innerText = "Bienvenue!";


// document.body.appendChild(newElement);

