
//b()
//console.log(a)
//
//var a = "hello world"
//
//function b(){
//    console.log('Called b!')
//}

//var a = 'Hotel California';
//console.log(a);
//
//if (a === undefined){
//    console.log('a is undefined')
//}
//else{
//    console.log('a is defined')
//}

//function b(){
//    console.log('Called b!')
//}
//b();
//console.log(a);
//
//var a = 'Hello world!'
//
//console.log(a)

//function a(){
//    var myVar = 2;
//    console.log('a '+myVar)
//    b()
//}
//
//function b(){
//    console.log(`b: ${myVar}`)
//    myVar = 3
//    function c(){
//        console.log(myVar)
//    }
//    c()
//}
//var myVar = 1;
//a()

// long running function
function waitThreeSeconds(){
    console.log('Started three second wait')
    var ms = 3000 + new Date().getTime()
    while (new Date() < ms) {}
          console.log('finished function')
}
function clickHandler(){
    console.log('Click event')
}

document.addEventListener('click', clickHandler)

waitThreeSeconds();
console.log('Finished execution')