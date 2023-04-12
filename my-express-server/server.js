const express = require("express");

const app = express()


app.get("/", (request, response) =>{
    response.send("<h1>Hello Guys. This is Udemy Node</h1>")
});

app.listen(3006,()=>{
    console.log("server started on port 3006");
});


