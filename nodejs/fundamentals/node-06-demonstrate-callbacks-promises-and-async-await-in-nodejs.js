// Experiment 6: Demonstrate Callbacks, Promises, and Async/Await in Node.js.
// Aim: To demonstrate the above Node.js concept.
// Description: This program demonstrates demonstrate callbacks, promises, and async/await in node.js using Node.js.
// Steps:
// 1. Create the Node.js file and add the required module or logic.
// 2. Save the program and install any required npm package.
// 3. Run the program with `node filename.js`.
// 4. Observe and verify the expected output in the terminal.
// Expected Output: A successful demonstration/result will be shown in the terminal or at the stated server endpoint.
function getData(callback) {
  setTimeout(() => callback(null, 'Data received'), 500);
}
getData((error, data) => console.log('Callback:', data));
Promise.resolve('Promise resolved').then(console.log);
async function run() {
  const data = await Promise.resolve('Async/Await resolved');
  console.log(data);
}
run();
