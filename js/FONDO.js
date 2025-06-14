"use strict";

var canvas = document.querySelector(".main-inicio .canvas-bg"),
  ctx = canvas.getContext("2d"),
  hue = 0, // Rojo puro
  stars = [],
  count = 0,
  maxStars = 1300; // Puedes ajustar esto

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Cache gradient
var canvas2 = document.createElement("canvas"),
  ctx2 = canvas2.getContext("2d");
canvas2.width = 100;
canvas2.height = 100;
var half = canvas2.width / 2,
  gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);

// Estrellas con centro blanco, borde rojo brillante y oscuro, terminando en transparencia
gradient2.addColorStop(0.025, "#ffffff"); // centro blanco brillante
gradient2.addColorStop(0.1, "hsl(" + hue + ", 90%, 50%)"); // rojo brillante
gradient2.addColorStop(0.3, "hsl(" + hue + ", 100%, 10%)"); // rojo oscuro
gradient2.addColorStop(1, "transparent"); // exterior transparente

ctx2.fillStyle = gradient2;
ctx2.beginPath();
ctx2.arc(half, half, half, 0, Math.PI * 2);
ctx2.fill();

function random(min, max) {
  if (arguments.length < 2) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maxOrbit(x, y) {
  var max = Math.max(x, y),
    diameter = Math.round(Math.sqrt(max * max + max * max));
  return diameter / 2;
}

var Star = function () {
  this.orbitRadius = random(maxOrbit(canvas.width, canvas.height));
  this.radius = random(60, this.orbitRadius) / 12;
  this.orbitX = canvas.width / 2;
  this.orbitY = canvas.height / 2;
  this.timePassed = random(0, maxStars);
  this.speed = random(this.orbitRadius) / 50000;
  this.alpha = random(2, 10) / 10;

  stars.push(this);
};

Star.prototype.draw = function () {
  var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
    y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
    twinkle = random(10);

  if (twinkle === 1 && this.alpha > 0) {
    this.alpha -= 0.05;
  } else if (twinkle === 2 && this.alpha < 1) {
    this.alpha += 0.05;
  }

  ctx.globalAlpha = this.alpha;
  ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
  this.timePassed += this.speed;
};

for (var i = 0; i < maxStars; i++) {
  new Star();
}

function animation() {
  ctx.globalCompositeOperation = "source-over";
  ctx.globalAlpha = 0.9;
  ctx.fillStyle = "hsl(0, 0%, 5%)"; // fondo negro casi puro
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.globalCompositeOperation = "lighter";
  for (var i = 0; i < stars.length; i++) {
    stars[i].draw();
  }

  window.requestAnimationFrame(animation);
}

animation();
