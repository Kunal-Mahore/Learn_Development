const clock = document.getElementById('clock');
const date = document.getElementById('date');
const greeting = document.getElementById('greeting');
const formatToggle = document.getElementById('format-toggle');
const toggleText = document.querySelector('.toggle-text');

let is24Hour = false;

function pad(n) {
  return n < 10 ? '0' + n : n;
}

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  if (hours < 12) {
    greeting.textContent = "Good Morning!";
  } else if (hours < 18) {
    greeting.textContent = "Good Afternoon!";
  } else {
    greeting.textContent = "Good Evening!";
  }

  let ampm = '';
  if (!is24Hour) {
    ampm = hours >= 12 ? ' PM' : ' AM';
    hours = hours % 12 || 12;
  }

  clock.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}${ampm}`;
  date.textContent = now.toDateString();
}

formatToggle.addEventListener('change', () => {
  is24Hour = formatToggle.checked;
  toggleText.textContent = is24Hour ? '24h' : '12h';
  updateClock();
});

const dayGradients = [
  ['#667eea', '#764ba2'],
  ['#43cea2', '#185a9d'],
  ['#00c9ff', '#92fe9d'],
];

const nightGradients = [
  ['#0f2027', '#203a43'],
  ['#232526', '#414345'],
  ['#141e30', '#243b55'],
  ['#000428', '#004e92'],
];

function changeBackground() {
  const hour = new Date().getHours();
  const gradients = (hour >= 19 || hour < 6) ? nightGradients : dayGradients;
  const [color1, color2] = gradients[Math.floor(Math.random() * gradients.length)];
  document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
}

setInterval(() => {
  updateClock();
}, 1000);

setInterval(changeBackground, 60000);

updateClock();
changeBackground();
