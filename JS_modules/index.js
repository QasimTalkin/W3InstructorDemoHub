let myButton = document.querySelector("#themeButton")

myButton.addEventListener("click", setAndChangeTheme)


function setAndChangeTheme(){
 document.body.style.backgroundColor = "#1D2D44"
 localStorage.setItem('list', JSON.stringify({item1:"pen", item2:["appale", 'blue', 'banana']}));
}

console.log(JSON.parse(localStorage.getItem('list')))
