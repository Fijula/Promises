## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.








// Initialize counter
let counter = 0;

// Function to update counter and display the current value
function updateCounter() {
  counter++;
  console.log(counter); // You can replace this with any display logic you prefer

  // Call the updateCounter function again after 1 second
  setTimeout(updateCounter, 1000);
}

// Start the counter
updateCounter();
































































(Hint: setTimeout)