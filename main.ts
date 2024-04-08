import inquirer from "inquirer";
import chalk from "chalk"
console.log(chalk.bgBlackBright.bold("\t\nWelcome tO Currency_Converter Tool\n"))
let exchange_rates:any={
"USD":1,
"EUR":0.92,
"AUD":1.52,
"RUB":92.51,
"PKR":277.70
}
let converted_from=await inquirer.prompt([
{
name:"from_currency",
type:"list",
message:"select the currency to convert from",
choices:["USD","EUR","AUD","RUB","PKR"]
},
{
name:"to_currency",
type:"list",
message:"select the currency to convert into",
choices:["USD","EUR","AUD","RUB","PKR"]
},
{
    name:"amount",
    type:"input",
    message:"enter the amount to convert"
}
]);
let from_amount =exchange_rates[converted_from.from_currency]
let to_amount =exchange_rates[converted_from.to_currency]
let amount=converted_from.amount

let base_amount=amount/from_amount
let converted_amount =base_amount * to_amount
console.log(`converted amount = ${chalk.bgCyanBright.bold(converted_amount.toFixed(2))
}`);