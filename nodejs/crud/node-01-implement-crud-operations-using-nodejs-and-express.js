// Experiment 1: Implement CRUD operations using Node.js and Express.
// Aim: To demonstrate the above Node.js concept.
// Description: This program demonstrates implement crud operations using node.js and express using Node.js.
// Steps:
// 1. Initialize the Node.js project with npm.
// 2. Install the required package(s), such as Express.
// 3. Write the server, route, middleware, or API logic required by the experiment.
// 4. Run the program with Node.js and test the endpoint in a browser or Postman.
// Expected Output: A successful demonstration/result will be shown in the terminal or at the stated server endpoint.
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.json({message: 'Practical Node.js API'}));

app.listen(3000, () => {
  console.log('Express server running at http://localhost:3000');
});
