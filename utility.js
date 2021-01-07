const readline = require('readline-sync')
class Utility {
    //UC1
    enterValidFirstName=() =>{
        let firstName;
        do { 
            firstName = readline.question("Enter valid First name: ")
        } while (!firstName.match("^[A-Z]{1}[a-z]{2,}$"));
        console.log("Valid");
    }
    //UC2
    enterValidLastName=() =>{
        let lastName;
        do { 
            lastName = readline.question("Enter valid Last name: ")
        } while (!lastName.match("^[A-Z]{1}[a-z]{2,}$"));
        console.log("Valid");
    }
    //UC3
    enterValidEmailId=() =>{
        let emailId;
        do { 
            emailId = readline.question("Enter valid Email Id: ")
        } while (!emailId.match("^[a-zA-Z0-9\\-\\+\\.]+.([a-zA-Z0-9])*@([a-z0-9]+.[a-z]{2,}.([a-z]{2,})?)$"));
        console.log("Valid");
    }
}
module.exports = new Utility();