console.log("hello");
function waitAsec(){
    let curr_time=new Date().getTime();

let fut_time=curr_time+1000;    //coz in comp wee use millisecs thts why we take 1000

while(new Date().getTime()<fut_time);

}

function waitNsec(n){
    for(let i=0;i<n;i++){
        waitAsec
    }
}
waitAsec(6);

// console.log(new Date().getTime());
 
FUNCTIONS USED AS ASYNCHRONOUS 

SETTIME-OUT

setTimeout(() => {
    console.log("inside settimeout")    // settimeout used to provide time delay
    
}, 0);
console.log("world");

//SET INTERVAL

let id=setInterval(() => {
    console.log("dataisfetchced")
    
}, 1000);

setTimeout(() => {
    
    clearInterval(id)
}, 8000);


// console.log("my name is abc");

(function IIFE(){
    // console.log("INSIDE IIFE FUNCTION");
})()

let student=(function IIFE(){
    let marks=90;

    function student(){
        details();
    }
    function details(){
        console.log(`percentage : ${(marks/100)*100}`);
    }
    return student;
})();

student();
