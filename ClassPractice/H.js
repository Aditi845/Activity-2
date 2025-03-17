//arrow functions
function a(){

}
a()
const square=x=>x*x;
const greet =()=>{
    console.log("hello World")
}
greet()
const add=(a,b)=>a+b //single line functions 
console.log(add(4,5))

const createPerson=(na, age)=>({
    na:na,
    age:age,
});
const person= createPerson('nitish', 12)
console.log(person)