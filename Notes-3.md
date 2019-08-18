# Types and Operators
Javascript is dynamically typed

## Primitive Types
**A primative type is a type of data that represents a single value. It is not an object**
* 6 primitive types in JS
  1. Undefined - represents a lack of existence 
  2. **NULL** represents lack of existence.
  3. **Boolean** true or false
  4. **Number** A floating point number. There is only one number type in JS.
  5. **String** A sequence of characters
  6. **Symbol** (ES6)

## Operators
* Basically functions. Take two arguments and return something
* prefix notation: +3 4;
* postfix notation: 3 4+;
* infix notation: 3 + 4;

## Operator Precedence and Associativity
* Functions are called in order of precedence
* *Associativity* what order operator functions get called in
  * When functions have the same precedence
  * Left to right
  * Right to left


```javascript
code example
var s = "this is highlighting
```

## Comparison Operators

## Coercion:
* Converting a value from one type to another
* Coercion can lead to weird results
```javascript
>Number(undefined)
<NaN
>Number(null)
<0
```
* This can lead to confusing result where you think null and undefined in this instance should give similar results

## Strict Equality/Inequality
* **Always default to strict equality/inequality**
* ===
* !==
```
>3 === '3'
<false
>3 == '3'
<true
```

```javascript
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

Not strict: 0, false are equal
Strict: 0, false are not equal
```
## Existence and Booleans
* Coerce something to a boolean. If it exists, it converts to true. else false

```javascript
var e=1;
// code goes out to internet and looks for a value.
// It then adds that value to a

if(e){
    console.log('a exists')
}
```