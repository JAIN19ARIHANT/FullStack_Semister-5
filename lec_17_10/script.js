// function fun1(){
//     let a=10;
//     let b=20;
//     function fun2(){
//         let c=40;
//         function fun3(){
//             return a+b+c;
//         }
//         return fun3;
//     }
//        return fun2;
// }

// console.log(fun1());  we ll get fun2 as output

// let returnandfun=fun1();
// console.log(returnandfun());
// console.log(fun1()()());    70

// USING ARROW FUNCTION
// function fun1(){
//     let a=10;
//     let b=20;
//     return ()=>{
//         let c=40;
//        return ()=>{
//             return a+b+c;
//         }
//         // return fun3;
//     // }
//     //    return fun2;
// }
// }
// console.log(fun1()()())

// let person={
//     name:"Shreyansh",
//     class:"E",
//     education:"B.tech",
// }
// for(var i in person){
//     console.log(person[i]);
// }

// array methods --- ussed to transform the arrayy
// they give callback function

// Map

let arr=[1,2,3,4,5]

// function mymap(item){
//     return item*3;
// }
// let newArr=arr.map(mymap);      
// console.log(newArr);    // console.log(arr.map(mymap));

// Filter
let filterarr=arr.filter(item=>(item%2==0));
// console.log(filterarr);

// Reduce  (to reduce a array into a single value)

console.log(arr.reduce((prev,curr)=>prev+curr));



