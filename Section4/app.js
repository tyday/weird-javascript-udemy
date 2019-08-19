// Objects and Functions

/* 
// Objects and the dot

var person = new Object();

person['firstname'] = "Tony"
person['lastname'] = "Alicea"

var firstNameProperty = "firstname"

console.log(person)
console.log(person[firstNameProperty])

person.address = new Object()
person.address.street = '111 Main St.'
person.address.city = "New York"
person.address.state = "NY" */

/* 
// Object literals
var Tony = {
    firstname: 'Tony',
    lastname: 'Alicea',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY',
    }
}

function greet(person){
    console.log('Hi ' + person.firstname)
}

greet(Tony)
greet({
    firstname:'Jake',
    lastname:'Ralston'
})

console.log(JSON.stringify(Tony)) */

/* 
// Functions are objects
function greet() {
    console.log('hi')
}
greet.language = 'english' */


// Function Statements and Function Expressions

function log(a) {
    console.log(a)
}

log(1)
log('hope')
log(function(){
    console.log("Save me Obi Won")
})