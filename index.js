const colorBox = document.getElementById('color-box');
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');

function updateColor() {
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;
  const rgb = `rgb(${red},${green},${blue})`;
  colorBox.style.backgroundColor = rgb;
  colorBox.textContent = rgb;
}

// Add event listeners to sliders
redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

// Initialize the color box
updateColor();