## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

// Initialize counter
let counter = 0;

// Function to update counter and display the current value
function updateCounter() {
  counter++;
  console.log(counter); // You can replace this with any display logic you prefer
}

// Start the counter
setInterval(updateCounter, 1000);
