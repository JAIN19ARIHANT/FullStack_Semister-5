//HOF
// function calculator(add,sub,multi,divide){
//     let a=20;
//     let b=30; 
//     console.log(add(a,b));
//     console.log(sub(a,b));
//     console.log(multi(a,b));
//     console.log(divide(a,b));


// }
// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// function multi(a,b){
//     return a*b;
// }
// function divide(a,b){
//     return a/b;
// }
// calculator(add,sub,multi,divide)



// ANOTHER METHOD OF TAKING INPUT
function calculator(a,b,sign,add,sub,multi,divide){
    // let a=20;
    // let b=30;
    if (sign=='+') {
    console.log(add(a,b));}
    if (sign=='-'){
    console.log(sub(a,b));}
    if (sign=='*'){
    console.log(multi(a,b));}
    if (sign=='/'){
    console.log(divide(a,b));}
}
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function multi(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
calculator(2,3,"+",add,sub,multi,divide);