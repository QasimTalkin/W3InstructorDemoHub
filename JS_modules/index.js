import inquirer from "inquirer";

inquirer.png.prompt([
{
  type:'list',
  message: "What is your username ?",
  choices: ["ewd", "qasim", "red"],
  name:'userName'
},
{
  type:'password',
  message: "What is your password ?",
  name:'password'
},
{
  type:'password',
  message: "Confirm your password ?",
  name:'confirmPassword'
}
]).then((kyle)=>{
   if (kyle.password == kyle.confirmPassword) {
     console.log("GOOD!")
   } else
   {
     console.log("Bad")
   }
})


