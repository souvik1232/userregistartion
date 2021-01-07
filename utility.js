const readline = require('readline-sync')
class Utility {
    enterValidFirstName=() =>{
        let firstName = readline.question('Enter First Name: ');
        do { 
            firstName = readline.question("Enter valid First name: ")
        } while (!firstName.match("^[A-Z]{1}[a-z]{2,}$"));
        console.log("Valid");
    }
}
module.exports = new Utility();