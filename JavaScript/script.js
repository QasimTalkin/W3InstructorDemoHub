// var, let and const


// spread and rest operator

// let myArray = [1,2,3]

// function sumOfThreeNums(a,b,c) {
//   return a+b+c;
// }

// console.log(sumOfThreeNums(...myArray))


// function iDontCareHowManyParams(...names) {
//    for (let item of names){
//      console.log(item)
//    }
// }

// iDontCareHowManyParams("Qasim", "Kyle","Qasim", "Kyle","Qasim", "Kyle")


// Destructuring

// let person = {
//   name:"Qasim",
//   age:5,
//   country:"Nicaragua",
//   printInfo() {
//   console.log(`Hello my name is ${this.name}, my age is ${this.age} and I live in ${this.country}, is Cool? ${this.isCool}`)
//  },
//  isCool:true
// }

// let {age, country, name} = person

// let myNum = [1,2,3,4,5,6,7,9];

// let [, , , , ...gender] = myNum;


// console.log(gender);


// Arrow Function

// console.log(sum(5,9));



// // declaration
// function sum(a,b) {
//   return a+b;
// }

let person = {
  name:"Qasim",
  age:5,
  country:"Nicaragua",
  info:"asd asdasdasd  asdnasdasjsdhnjn asdjnadjsdnadsjdn jnasd a ",
  isCool:false
}

let person2 = {
  name:"Kyle",
  age:15,
  country:"Nicaragua",
  info:"asd asdasdasd  asdnasdasjsdhnjn asdjnadjsdnadsjdn jnasd a ",
  isCool:true
}

let person3 = {
  name:"Leo",
  age:55,
  country:"Nicaragua",
  info:"some Info Classified ",
  isCool:true
}

let person4 = {
  name:"John Ault",
  age:0,
  country:"Nicaragua",
  info:"Happy Birthday ",
  isCool:true
}

let myPersonArray = [person, person2, person3, person4]

function addCard(name, info, age) {
  return `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://picsum.photos/200/200" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${info}</p>
    <p class="card-text">age is ${age}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>`
}

myPersonArray.map((item)=>{
if(item.isCool){
  document.querySelector("#myCard").innerHTML += addCard(item.name, item.info, item.age)
}
})




const sampleArr1 = [1, 2, 3, 4, 5];
const sampleArr2 = sampleArr1.map(value=>value + 2);

console.log(sampleArr2);
