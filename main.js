const utility=require('./utility')
const readline = require('readline-sync')

let firstName = readline.question('Enter First Name ');

const retData=utility.printName(firstName);
console.log("it is in main.js",retData);