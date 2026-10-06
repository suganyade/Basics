const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  console.log(url, method);

  // GET /
  if (url === '/' && method === 'GET') {
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

  // POST /message
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('hello.txt', 'DUMMY');

    res.statusCode = 302;           // redirect
    res.setHeader('Location', '/');
    return res.end();
  }

  // Default route
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Page Title</title></head>');
  res.write('<body><h1>This is a Heading</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
