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

 
//  // Automatic semicolon insertion

//  function jake(){
//      return
//      {
//          position:"on back"
//      }
//  }
//  console.log(jake())


/* 
//function statement
function greet(name){
    console.log('Hello ' + name)
}
greet();

// using a function expression
var greetFunc = function(name) {
    console.log('Hello ' + name)
}
greetFunc()
 // using an IIFE
var greeting = function(name) {
    console.log('Hello ' + name)
}();
var greetz = "hola ";
function test(name){
    var greetz = "hello"
    console.log(greetz + name)
}
test();
(function(name){
    var greeting = 'Helloooo '
    console.log(greeting + name);
    // return greeting + name;
}());
console.log(greetz)
 */


 //Closure
//  function greet(whattosay){
//      return function(name){
//          console.log(whattosay + ' ' + name);
//      };
//  }

//  var sayHi = greet('Hi')
//  console.log(sayHi)
/* 
function buildFunctions(){
    var arr = [];
    for (var i = 0; i<3;i++){
        let j = i; // sets up j as a new variable in memory
        arr.push(
            function() {
                console.log(i) // Represents i at the time the function was run
                console.log(j)
            }
        )
    }
    return arr;
}
// This example works pre ES6
function buildFunctionsES5(){
    var arr = [];
    for (var i = 0; i<3;i++){
        // We push an instantly called function to the array.
        // That way, the j refers to the i in scope specific
        // to the execution context of the new function
        arr.push(
            (function (j){
                return function(){
                    console.log(j)
                }
            })(i)
        )
    }
    return arr;
}
var fs = buildFunctionsES5();
fs[0]()
fs[1]()
fs[2]() 
*/

/* function sayHiLater(){
    var greeting = 'Hello'
    setTimeout(
        function(){
            console.log(greeting);
        },
        3000
    )
    console.log('other hello')
}
sayHiLater(); */

/* function tellMeWhenDone(callback){
    var a = 1000; // some work
    var b = 2000; // somw work

    callback()
}

tellMeWhenDone(function(){
    console.log("I'm done")
}) */
/* 
var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function(){
        var fullname = `${this.firstname} ${this.lastname}`;
        return fullname 
    }
}
var logName = function(lang1, lang2){
    console.log(`Logged: ${this.getFullName()}`)
    console.log(`Arguments: ${lang1}, ${lang2}`)
    console.log('----------------')
}
var logPersonName = logName.bind(person);
logPersonName('en','es')
logName.call(person, 'russian','swedish')
logName.apply(person, ['deutsch', 'francais'])

var person2 = {
    firstname: "Jane",
    lastname: "Smith"
}
console.log(person.getFullName.apply(person2));

 */

/* 
// function currying
function multiply(a,b){
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2)
console.log(multiplyByTwo(4))
 */

//  function baz() {
//      // call-stack is: `baz`
//      // so our call-site is in the global scope
//      console.log("baz");
//      bar(); // <-- call-site for `bar`
//  }
//  function bar() {
//     // call-stack is: `baz` -> `bar`
//     // so, our call-site is in `baz`

//     console.log( "bar" );
//     foo(); // <-- call-site for `foo`
//  }
//  function foo() {
//     // call-stack is: `baz` -> `bar` -> `foo`
//     // so our call-site is in `bar`

//     console.log('foo')
//  }

//  baz(); // <--- call-site for `baz`

 function foo() {
	console.log( this.a );
}

function doFoo(fn) {
	// `fn` is just another reference to `foo`

	fn(); // <-- call-site!
}

var obj = {
	a: 2,
	foo: foo
};

// var a = "oops, global"; // `a` also property on global object

// // doFoo( obj.foo ); // "oops, global"
// doFoo(obj.foo)
// // obj.foo()
// aa = obj.foo.bind(obj)
// doFoo(aa)

// Functional Programming

function mapForEach(arr, fn){
    var newArr = []
    for (var i=0;i<arr.length;i++){
        newArr.push(
            fn(arr[i])
        )
        
    }
    return newArr
}
var arr1 = [1,2,3]
console.log(arr1)
arr2 = []
for (var i=0;i<arr1.length;i++){
    arr2.push(arr1[i]*2)
}
console.log(arr2)
console.log(arr2.map((a)=>a+1))
console.log(arr2)
console.log(mapForEach(arr1, function(a){return a*3}))


arr2 = mapForEach(arr1,function(item){return item * 9})
console.log(arr2)

checkPastLimiter= function (limiter,item) {
    return item > limiter
}
aa = checkPastLimiter(1)

arr3 = mapForEach(arr1,checkPastLimiter.bind(this,3))
console.log(arr3)

bindPastLimiter = function(limiter){
    return checkPastLimiter.bind(this,limiter)
}
arr4 = mapForEach(arr1, bindPastLimiter(0))
console.log(arr4)

var checkPastLimiterSimplified = function(limiter){
    return function(limiter,item){
        return item > limiter;
    }.bind(this,limiter)
}
const multiplyByAmount = function(amount){
    return function(amount, data){
        return amount * data
    }.bind(this,amount)
}
arr5 = mapForEach(arr1, checkPastLimiterSimplified(1))
console.log(arr5)
arr6 = mapForEach(arr1,multiplyByAmount(6))
console.log(arr6)


var arr7 = _.filter([1,2,3,4,5,6,7,8,9,10,11],function(item){return item%3===1})
console.log(arr7)