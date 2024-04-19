//Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
const helloPromise = new Promise<string>((resolve) => {
setTimeout(() => {
resolve("Hello, World!");
}, 2000);
});
  
helloPromise.then((message) => console.log(message));