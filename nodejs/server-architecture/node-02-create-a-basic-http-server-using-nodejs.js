// Experiment 2: Create a basic HTTP Server using Node.js.
// Aim: To demonstrate the above Node.js concept.
// Description: This program demonstrates create a basic http server using node.js using Node.js.
// Steps:
// 1. Create the Node.js file and add the required module or logic.
// 2. Save the program and install any required npm package.
// 3. Run the program with `node filename.js`.
// 4. Observe and verify the expected output in the terminal.
// Expected Output: A successful demonstration/result will be shown in the terminal or at the stated server endpoint.
const http = require('http');
const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello from the Node.js server');
});
server.listen(3000, () => console.log('Server running at http://localhost:3000'));
