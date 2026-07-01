// Write a function that returns a message using template literals.

function getMessage(name, age) {
   return `Hello my name is ${name} and i am ${age} years old.`; 

}

console.log(getMessage("alanjoshi",20));

module.exports = getMessage;
