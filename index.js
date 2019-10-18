const http = require('http');

const express = require('express');
const app = express();

app.use(express.json());

const appInsights = require("applicationinsights");
appInsights.setup("50252350-4d6f-4e9a-b4da-9ebc9c613fb7");
appInsights.start();


app.get('/hello',async (req,res)=>{
    try{
        console.log('Hello');
        res.json('Hello Chandan');
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});
app.get('/derror',async (req,res)=>{
    let i = 5;
    let j = 0;
    try {
        let k = i/j;
    } catch (e) {
        console.log('e');
        res.sendStatus(500);
    }
});


// const server = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World!");
// });


const port = process.env.PORT || 1337;

app.listen( port, ()=> console.log("Server running at http://localhost:%d", port));

// const port = process.env.PORT || 1337;
// server.listen(port);

// console.log("Server running at http://localhost:%d", port);
