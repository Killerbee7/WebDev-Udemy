// const img1=document.querySelector('#rainbow');


// async function apiPractice() {
//     const response= await fetch('rainbow.jpg');
//     const blob = await response.blob();
//     img1.src=URL.createObjectURL(blob);

//     console.log("kjsdnk")

// }
alert("api practice");
console.log('fetching api rainbow');
fetch('rainbow.jpg').then(response => {
    return response.blob();
}).then(blob=>{
    console.log(blob);
    document.getElementById('rainbow').src= URL.createObjectURL(blob);
});