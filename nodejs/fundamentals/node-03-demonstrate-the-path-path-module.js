// Experiment 3: Demonstrate the Path (path) module.
// Aim: To demonstrate the above Node.js concept.
// Description: This program demonstrates demonstrate the path (path) module using Node.js.
// Steps:
// 1. Create the Node.js file and add the required module or logic.
// 2. Save the program and install any required npm package.
// 3. Run the program with `node filename.js`.
// 4. Observe and verify the expected output in the terminal.
// Expected Output: A successful demonstration/result will be shown in the terminal or at the stated server endpoint.
const path = require('path');
console.log('File name:', path.basename(__filename));
console.log('Directory:', path.dirname(__filename));
console.log('Extension:', path.extname(__filename));
