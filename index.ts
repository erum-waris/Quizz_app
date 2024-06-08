

import inquirer from "inquirer";
import chalk from "chalk";

let marks = 0;

console.log(chalk.bold.bgGreen
    ("WELCOME TO ERUM WARIS'S QUIZ APP"));
do{
const Quizzez  = await inquirer.prompt([
    {
        name:"Quiz_1",
        type:"list",
        choices:[
            "1.let age = 30",
            "2.const age: number = 30",
            "3.var age: number = 30",
            "4.let age: number; age = 30"
        ],
        message:chalk.green("Q1:Which of the following statements correctly declares a variable age and initializes it with the value 30 in TypeScript?"),
    
    },
    {
        name:"Quiz_2",
        type:"list",
        choices:[
            "1.number",
            "2.string",
            "3.undefined",
            "4.error"
        ] ,
        message:chalk.blue("Q2:What will be the data type of the variable result after the following code execution in TypeScript?  let result = 10 + '20' "),
        
    },
    {
        name:"Quiz_3",
        type:"list",
        choices:[
            "1.const PI: number = 3.14",
            "2.let PI = 3.14",
            "3.const PI = 3.14",
            "4. PI = 3.14"
        ] ,
        message:chalk.red("Q3:Which TypeScript syntax correctly declares a constant variable PI and initializes it with the value 3.14?")

    },
    {
        name:"Quiz_4",
        type:"list",
        choices:[
            "1.15",
            "2.510",
            "3.'15' ",
            "4.error"
        ] ,
        message:chalk.yellow("Q4:What will be the value of total after executing the following TypeScript code?   let total = 5 + '10' ")
    },
    {
        name:"Quiz_5",
        type:"list",
        choices:[
            "1.Installing TypeScript globally using npm",
            "2.Creating a new tsconfig.json file",
            "3.Writing the first .ts file", 
            "4.Installing Node.js"
        ] ,
        message:chalk.cyan("Q5:What is the first step in setting up a TypeScript environment in a new project?")
    },
    {
        name:"Question",
        type:"list",
        choices:[
            "yes",
            "No"
        ],
        message:"Do you want to carry on to  attempt QUIZZEZ? "
    },
])
if(Quizzez.Quiz_1 === "1.let age = 30"){
    console.log(chalk.yellow("A1:Correct Answer,Beacause we can reassign age to let if we select const option it can't be reassign"));
    marks += 10;
} else { console.log("Best of luck for next time");
}
if(Quizzez.Quiz_2 === "2.string"){

    console.log(chalk.green("A2:Correct Answer,Beacause when string is going to join with number the type will be string b/c concatination occured"));
     marks += 10;
} 
else { console.log("Best of luck for next time");

if(Quizzez.Quiz_3 === "1.const PI: number = 3.14"){

    console.log(chalk.gray("A3:Correct Answer,Beacause in this option we can see strong typing syntax which is the part of typescript "));
     marks += 10;
} else { console.log("Best of luck for next time");}

if(Quizzez.Quiz_4 === "2.510"){

    console.log(chalk.gray("A4:Correct Answer,Beacause string concatination occured"));
     marks += 10;
} else { console.log("Best of luck for next time");}

if(Quizzez.Quiz_5 === "1.Installing TypeScript globally using npm"){

       console.log(chalk.gray("A5:Correct Answer,no need to explain"));
     marks += 10;
} else { console.log("Best of luck for next time");}


   console.log(chalk.bgRed.black(`congratulations your obtained  marks are :${marks}`));
   
if(Quizzez.Question === "No") {
    
    console.log(chalk.bgGray("you can enjoy QUIZZEZ"));
        continue;
} else {
    
    (chalk.bgBlue("Exited ! Thanks for using"));
    break;
}
}
}while(true)