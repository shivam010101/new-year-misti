let index = 0;
let started = false;

const images = [
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png"
];

const texts = [
  "Every moment with you feels magical 💖",
  "You are my favorite person in every universe 🌍",
  "Thank you for loving me endlessly 💞",
  "Happy New Year My Misti ❤️\nI promise to love you forever 💍"
];

const shapes = [
  "heart.png",
  "teddy.png",
  "heart.png",
  "teddy.png"
];

const img = document.getElementById("slideImage");
const txt = document.getElementById("text");
const shape = document.getElementById("shapeImg");
const music = document.getElementById("music");

function typeText(element, text, speed = 50) {
  element.innerText = "";
  let i = 0;
  let typing = setInterval(() => {
    element.innerText += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(typing);
  }, speed);
}

function nextSlide() {
  if (!started) {
    music.play();
    started = true;
  }

  if (index >= images.length) return;

  img.src = images[index];
  shape.src = shapes[index];
  typeText(txt, texts[index]);

  if (index === images.length - 1) {
    finalFireworks();
    document.querySelector(".glow-card").style.boxShadow =
      "0 0 50px hotpink";
  }

  index++;
}

/* FIREWORKS */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function firework(x, y) {
  for (let i = 0; i < 80; i++) {
    let angle = Math.random() * Math.PI * 2;
    let speed = Math.random() * 6 + 2;
    let vx = Math.cos(angle) * speed;
    let vy = Math.sin(angle) * speed;

    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${Math.random() * 360},100%,60%)`;
    ctx.fill();
  }
}

function finalFireworks() {
  let count = 0;
  let interval = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    firework(
      Math.random() * canvas.width,
      Math.random() * canvas.height
    );
    count++;
    if (count > 20) clearInterval(interval);
  }, 300);
}
