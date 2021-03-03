const divs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value); 
  e.stopPropagation(); // stop bubbling this event up
}

// events bububle up = by default capture: false (run function on the way up)
// capture: true means we will run function on the run down, not up
divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true // will unbind itself after one click
  // once is the the same as div.removeEventListener('click', logText);
}));

