const https = require('http');
const fs= require('fs');
const server = https.createServer((req,res)=>{
  const url =req.url;
  const method =req.method;
  console.log(url,method);
  if(url=== '/' && method ==='GET'){
   res.setHeader('Content-Type', 'text/html');
    res.write(`
      <form action="/message" method="POST">
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname"><br><br>
        <button type="submit">Submit</button>
      </form>
    `);
    return res.end();
  
  }

  if(url==='/message'&& method==='POST'){
fs.writeFileSync('hello1.txt','Happy to live');
res.statusCode=302;
res.setHeader('Location','/Joy');
return res.end();
  }
if(url==='/Joy'){
 res.setHeader('content-type','text/html');
    res.write('<html>');
  res.write('<head><title>Page Title</title></head>');
  res.write('<body><h1>This is a Heading</h1></body>');
  res.write('</html>');
  return res.end();
}
   
});
server.listen(3000);