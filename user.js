function generatePassword(firstName, middleName, lastName) {
   
    var firstChars = firstName.slice(0, 2);
    var middleChars = middleName.slice(0, 2);
    var lastChars = lastName.slice(0, 2);

    
    var randomNumber = Math.floor(Math.random() * 900) + 100; 

    var password = firstChars + middleChars + lastChars + randomNumber;

    return password;
}


var firstName = "Prajakta";
var middleName = "Pramod";
var lastName = "Kamble";

var password = generatePassword(firstName, middleName, lastName);
console.log("Generated password:", password);
