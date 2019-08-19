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

/*
// Function Statements and Function Expressions

function log(a) {
    console.log(a)
}

log(1)
log('hope')
log(function(){
    console.log("Save me Obi Won")
}) */

/* 
console.log(this) // points to global object

function a(){
    console.log(this)
}

var b = () => {
    console.log(this)
}
a(); // points to global object
b(); // also points to global object
 */

//var c = {
//    name:"The c object",
//    log: function(){
//    console.log(this)
//    }
//}
//
//c.log()

/* 
var c = {
    name:"The c object",
    log: function(){
    var self = this
    self.name = 'Updated c object'
    console.log(self)
    
    var setname = function(newname){
        self.name = newname
    }
    setname('Updated again! The c object')
    console.log(self)
    }
         
}
c.log()
 */

/* 
//Arguments and ...spread

 function greet(firstname, lastname, language="Catlish"){
     language = language || "doglish"
     console.log(firstname)
     console.log(lastname)
     console.log(language)
     console.log(arguments)
 }

 greet("jake","Ralston")

function greet(first,last,...other){
    console.log(`First ${first}, Last: ${last} Others: ${other}`)
}
greet("j",'R',1,2,3,'hello')
 */

 
 // Automatic semicolon insertion

 function jake(){
     return
     {
         position:"on back"
     }
 }
 console.log(jake())