## Syntax Parser
* The machine that interprets your code

## Lexical Environment
* Where your code exists.
* What is near it

## Execution Context: Setup
* A wrapper to help manage the code that is running


# Name/Value pairs and objects
An object is a collection of name/value pairs

## The global environment and the global context
* Execution context (Global)
  * Creates Global Object
  * Creates 'this'
  * Each tab/window is it's own global context area
  * Global Object (window) == 'this' ... in the global environment


The execution context:
Creation and 'Hoisting'

* Execution context is created in two phases
  * Creation phase
  * Hoisting
    * Sets up Memory space for Variables and Functions
    * Functions set into memory in their entirety
    * Variables are **undefined**
    * Hoisting is risky. You should define variables and functions before using them

## Javascript and Undefined
Not defined and undefined are not the same thing

## Execution Context: Code Execution

## Single Threaded, Synchronous Execution

## Function Invocation and the Execution Stack
* Invocation- running a function by using ()
* When you invoke a function, a new execution context is created and added to the stack

## Variable Environment: (Scope)
Where they live and how they relate to each other

## Scope Chain
* Objects look to themselves for variable information. Then to whatever created them and so on

## Scope, ES6, Let
* Block scoping
