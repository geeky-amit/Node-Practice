const http = require('http');
const fs = require('fs');

const PORT = 2000;

const home = fs.readFileSync("./index.html", "utf8");
const about = fs.readFileSync("./about.html", "utf8");





const server = http.createServer((req, res) => {

    if(req.url === "/"){
        return res.end(home)
    }

    if(req.url === "/about"){
       return res.end(about)
    }

    if(req.url === "/product"){
        return res.end("<h1>Product Page</h1>")
    }

    if(req.url === "/services"){
        res.end("<h1>Services Page</h1>")
    }

    if(req.url === "/contact"){
        return res.end("<h1>Contact Page</h1>")
    }
    else{
        return res.end("<h1>404 Page Not Found</h1>")
    }
});





server.listen(PORT,() =>{
    
        console.log(`server is working on ${PORT}`);
   
});