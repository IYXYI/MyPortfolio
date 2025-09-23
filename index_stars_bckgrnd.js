
// Animated star background for the canvas
const canvas = document.getElementById('index_stars_bckgrnd');
const ctx = canvas.getContext('2d');
let stars = [];
const STAR_COUNT = 120;
const STAR_COLOR = '#ccd6f6';
const STAR_SIZE = 1.2;
const STAR_SPEED = 0.45;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createStars() {
  stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * STAR_SIZE + 0.2,
      speed: Math.random() * STAR_SPEED + 0.05
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
    ctx.fillStyle = STAR_COLOR;
    ctx.shadowColor = STAR_COLOR;
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.closePath();
  }
}

function updateStars() {
  for (let star of stars) {
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.x = Math.random() * canvas.width;
      star.y = 0;
    }
  }
}

function animate() {
  drawStars();
  updateStars();
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  createStars();
});

resizeCanvas();
createStars();
animate();
