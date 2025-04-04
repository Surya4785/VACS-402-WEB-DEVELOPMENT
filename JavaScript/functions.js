/* functions in javaScript*/

// function declaration

function greet(){
    console.log("Hello JS");
}
greet(); // function calling 

// function with parameters
(
function calculation(a = 7, b = 8){
    var c = a*b;
    console.log(c);
} 
)();
(
// function with default parameter
function calculation(a=4, b=8){
    var c=a*b;
    console.log(c);
}
)();

// calling a function
function cal(a,b){
    return{
        add:()=> console.log(a+b),
        mul:()=>console.log(a*b)
    };
};
let res=cal(5,7);
res.add();
res.mul();

// Average using functions

function onePlusAvg(a,b,c){
    return Math.round(1 + (a+b+c)/3)
}

let a = 1;
let b = 2;
let c = 3;

console.log("One plus Average of a, b and c is: ", onePlusAvg(a,b,c))

// Sum

const sum = (p, q)=>{
    return p+q
}
console.log(sum(9, 7))