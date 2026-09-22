// Experiment 5: Implement JWT-based Authentication.
// Aim: To demonstrate the above Node.js concept.
// Description: This program demonstrates implement jwt-based authentication using Node.js.
// Steps:
// 1. Create the Node.js file and add the required module or logic.
// 2. Save the program and install any required npm package.
// 3. Run the program with `node filename.js`.
// 4. Observe and verify the expected output in the terminal.
// Expected Output: A successful demonstration/result will be shown in the terminal or at the stated server endpoint.
// JWT practical starter.
// Install: npm install jsonwebtoken
const jwt = require('jsonwebtoken');
const token = jwt.sign({userId: 101, role: 'user'}, 'demo-secret', {expiresIn: '1h'});
console.log('Token:', token);
console.log('Payload:', jwt.verify(token, 'demo-secret'));
