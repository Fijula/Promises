/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("done 1");
      }, 1000);
    });
  }
  
  function waitTwoSecond() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("done 2");
      }, 2000);
    });
  }
  
  function waitThreeSecond() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("done 3");
      }, 3000);
    });
  }
  
  function calculateTime() {
    const start = new Date();
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
      .then(() => {
        const end = new Date();
        const time = end - start;
        console.log(`All promises resolved in ${time} milliseconds.`);
      })
      .catch((err) => {
        console.error('At least one promise was rejected:', err);
      });
  }
  
  calculateTime();
  