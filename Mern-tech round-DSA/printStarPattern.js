const prompt=require("prompt-sync")({sigint:true}); 

var userInput = prompt("Please enter number: ");

for(let i=userInput;i>=1;i--)
{
    if(i==userInput)
    {
        let str="";
        for(let j=i;j>0;j--)
        str = str+"*";
        console.log(str);
    }

    else
    {
        let str = "*";
        for(let k=i-2;k>0;k--)
        str = str+" ";
        
        if(i!=1)
        str = str+"*";
        console.log(str);
    }
}