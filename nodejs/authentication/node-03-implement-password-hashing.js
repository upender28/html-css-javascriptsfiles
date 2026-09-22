// Experiment 3: Implement Password Hashing.
// Aim: To demonstrate the above Node.js concept.
// Description: This program demonstrates implement password hashing using Node.js.
// Steps:
// 1. Create the Node.js file and add the required module or logic.
// 2. Save the program and install any required npm package.
// 3. Run the program with `node filename.js`.
// 4. Observe and verify the expected output in the terminal.
// Expected Output: A successful demonstration/result will be shown in the terminal or at the stated server endpoint.
// Authentication practical starter.
// Install bcrypt with: npm install bcrypt
const bcrypt = require('bcrypt');
(async () => {
  const hash = await bcrypt.hash('password123', 10);
  console.log('Hash:', hash);
  console.log('Verified:', await bcrypt.compare('password123', hash));
})();
