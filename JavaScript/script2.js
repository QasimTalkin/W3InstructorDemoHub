function logOnConsole (arrayOfValues){
  for (let value of arrayOfValues){
    console.log(value)
  }
}

logOnConsole([1,2,3,"Qasim", 44])


let myButton = document.getElementById('johnsButton');

myButton.addEventListener('click', ()=>console.log('lol'))
