let p=new Promise((resolve, reject) => {
    let a=20;
    let b=60;
    if(a+b>55){
        return resolve(a+b);
    }
    else{
        return reject("sum of a and b is less thsn 55");
    }
})
    p.then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })


    const sum=(a,b)=>{
    return new Promise((resolve, reject) => {
        if(a+b>55){
            return resolve(new Promise(()=>{
                console.log(a+b);
        }));
    }
        else{
            return reject("sum of a and b is less thsn 55");
        }
    })
}
        sum(50,3).then((res)=>{
            console.log(res);
        }).then(()=>{
        })
        .catch((err)=>{
            console.log(err);
        }).finally(()=>{
            console.log("code executes");
        })

        //FETCH (return promise)

        fetch("http://google.com")
        .then((res)=>{
            return res.json();
         }).then((data)=>{
            console.log(data);
         }).catch(()=>{
            console.log(err);

         })

