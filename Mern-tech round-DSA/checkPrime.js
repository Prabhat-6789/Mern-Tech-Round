const prompt=require("prompt-sync")({sigint:true}); 
 var userInput = prompt("Please enter number:");

let i=2;
for(i=2;i<userInput;i++)
{
    if(userInput%i == 0)
    {
        console.log(userInput," is not prime");
        break;
    }
}

if(i==userInput)
console.log(userInput," is prime");