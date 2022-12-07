let p= new Promise(( resolve,reject) => { 
    console.log("promise is pending");
    setTimeout(() =>{
        console.log("i am a promise and i am fullfiulled")
        resolve(true)}, 5000)
    
})

console.log(p);