Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


// Get the current machine time in HH:MM:SS format
function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

// Get the current machine time in HH:MM:SS AM/PM format
function getCurrentTimeWithAMPM() {
  const now = new Date();
  const hours = now.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${formattedHours}:${minutes}:${seconds} ${ampm}`;
}

// Update the clock every second and display the time
function updateClock() {
  setInterval(() => {
    const currentTime = getCurrentTime();
    const currentTimeWithAMPM = getCurrentTimeWithAMPM();
    console.log(`Current Time (HH:MM::SS): ${currentTime}`);
    console.log(`Current Time (HH:MM::SS AM/PM): ${currentTimeWithAMPM}`);
  }, 1000);
}

// Start the clock
updateClock();
