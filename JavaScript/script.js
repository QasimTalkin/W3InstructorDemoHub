// create an element -> h2, "Random Pic". id: subHeading ✔️
// create an image element -> img, give it a url and other properties
// addd these to the HTML document



let sub = document.createElement("h2");
sub.innerText = "Random Pic ✔️";
sub.id = "subHeading";

let myImage = document.createElement("img") ; //<img src="">
myImage.src = "https://picsum.photos/200/300";
myImage.alt = "This is an image ok"
myImage.id = "haoyu"


// create a button element, give it the value "Stop Please don't' hurt me"
// give it an id = "ourButton"

// create an H2 element with id "counter" with innetText = 0

// add event listener to the button that will update the h2 element with id counter

let ourButton = document.createElement("button");
ourButton.innerText = "Stop Please don't' hurt me";
ourButton.id = "ourButton";

let counter = 0;
let ourH2 = document.createElement("h2");
ourH2.id = "counter"
ourH2.innerText = counter;

document.body.append(ourButton);
document.body.append(ourH2);

let colors = ["red", "blue", "green", "pink", "yellow", "white", "black", "brown"]

function updateCounter(event) {

  alert(event.target.type);
  alert(event.target.innerText);
  counter++;
  ourH2.innerText = counter;
  document.body.style.background = colors[Math.floor((Math.random()*colors.length))]
}
ourButton.addEventListener("click", updateCounter)


let inputOne = document.createElement("input");

let inputTwo = document.createElement("input");

let showName = document.createElement("button");
showName.innerText = "Click me, Maybe Ill work";
showName.addEventListener("click", displayName);


let fullName = document.createElement("h2");
fullName.innerText = "No Name";

document.body.append(inputOne);
document.body.append(inputTwo);

document.body.append(showName);
document.body.append(fullName);

function displayName(){
  fullName.innerText = Number(inputOne.value) + Number(inputTwo.value)
}

