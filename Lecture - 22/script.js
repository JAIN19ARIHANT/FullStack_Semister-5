function downloadbook(){
    setTimeout(() => {
        console.log("book downloaded");
        }, 5000);
        unzipped();
}

function unzipped(parsing){
    setTimeout(() => {
        console.log("book unzipped");
        setTimeout(() => {
            console.log("book parsed");
            setTimeout(() => {
                console.log("book read and analyzed ");
                setTimeout(() => {
                    console.log("book uploaded successfully");
                }, 3000)
            }, 2000)
            }, 3000)
         }, 2000)
}
downloadbook(unzipped);

// Solves callback hell---PROMISES

