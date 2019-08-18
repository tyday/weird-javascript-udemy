/* eslint-env es6 */
let a = 4 * 5 > 10
console.log(typeof(a),a)

let b = 4 + '1'
console.log(typeof(b),b)
console.log(3<2<1)



function checkEquality(a,b){
    if (a == b ){
        console.log(`Not strict: ${a}, ${b} are equal`)
    } else {
        console.log(`Not strict: ${a}, ${b} are not equal`)
    }
}
function strictCheckEquality(a,b){
    if (a===b){
        console.log(`Strict: ${a}, ${b} are equal`)
    } else{
        console.log(`Strict: ${a}, ${b} are not equal`)
    }
}

var c = 0;
var d = false;

checkEquality(c,d)
strictCheckEquality(c,d)

var e=0;
// code goes out to internet and looks for a value.
// It then adds that value to a

if(e){
    console.log('a exists')
}