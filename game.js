// Get the necessary DOM elements
const clickButton = document.getElementById('clickButton');
const clickCountDisplay = document.getElementById('clickCount');

// Initialize the click count
let clickCount = 0;

// Add a click event listener to the button
clickButton.addEventListener('click', () => {
  // Increment the click count
  clickCount++;

  // Update the click count display
  clickCountDisplay.textContent = `Clicks: ${clickCount}`;
});

// Function to reset the click count
function resetClickCount() {
  clickCount = 0;
  clickCountDisplay.textContent = `Clicks: ${clickCount}`;
}

// Add a reset button
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.addEventListener('click', resetClickCount);
document.body.appendChild(resetButton);
