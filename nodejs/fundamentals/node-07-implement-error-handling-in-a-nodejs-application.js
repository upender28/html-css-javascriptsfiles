// Experiment 7: Implement Error Handling in a Node.js application.
// Aim: To demonstrate the above Node.js concept.
// Description: This program demonstrates implement error handling in a node.js application using Node.js.
// Steps:
// 1. Create the Node.js file and add the required module or logic.
// 2. Save the program and install any required npm package.
// 3. Run the program with `node filename.js`.
// 4. Observe and verify the expected output in the terminal.
// Expected Output: A successful demonstration/result will be shown in the terminal or at the stated server endpoint.
try {
  JSON.parse('invalid json');
} catch (error) {
  console.log('Handled error:', error.message);
}
