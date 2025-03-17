//type of scope
//global scope
//local scope
var a=90
console.log(a)
//terminal cmd: node index.js
//redeclaration
//reassignment
//hoisting
//Var declaration
//type of scope
var globalVar="I am global"
console.log(globalVar)
function localVar(){
    var localVar1="Im local with var"
    console.log(localVar)
    console.log(globalVar)
}
//console.log(localVar1)
localVar()

//redeclaration in var
 function reDec(){
    var t=232
    var t=56;  //it can overwrite redecleration is possible  with var declaration (redeclaration is allowed)
    console.log(t)
}
reDec()

//reassignment in var
function reAssign(){
    var b=34;
    b=3;
    console.log(b) //reassignment is allowed
}
reAssign()
// hoisting in var
function Hois(){
    console.log("Before declaration",k)
    var k=34434
    console.log("After declaration", k)
}
Hois()

//let declaration 
let globalLet="i m global let"
console.log(globalLet)
function globalLetfunc(){
    const localLet="i m local let"
    console.log(localLet)
}
globalLetfunc()

//const  declaration
let globalLet1= "i m global let"
console.log(globalLet1)
function globalLetfunc1(){
    const localLet1="i m local let"
    console.log(localLet1)
}
globalLetfunc1()

//let redeclaration

function j(){
    let h=3
    // let h=343;
    console.log(h) //redeclaration is not possible 
}
j()
//reassignment
function reassignByLet(){
    let y=4
    y=43
    console.log(y)// reassignment is possible in Let
}
reassignByLet()

// const redeclaration
function constReDec(){
    const d=343
    //const d=234      //not possible
    console.log(d)
}
constReDec()

// reassigment 
function c(){
    const i=34
    //i = 23 error.. (not possible)
    console.log(i)
}
c()
//for hoisting not possible with let and const

// reassignment is possible in let and var but not const

//datatypes

let number = 23
let name = "test"
let isActive = true
let user = null
let age;
let person ={
    name1: "test",
    age:32
}
let num=[2 , 3, 2]
console.log("data type" , typeof(number))

// operator
//let a= 34
//let b=40

//arithmetic operator

let num1 = 20
let num2= 48
let c1=num1+num2
console.log(c1)



