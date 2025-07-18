const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "アァイィウヴエエェオカガキギクグケゲコゴサザシジスズセソタチッツテトナニヌネハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワン0123456789".split("");

const fontSize = 14;
const columns = canvas.width / fontSize; // number of columns
const drops = new Array(Math.floor(columns)).fill(1);

function draw() {
  //Fade
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0f0"; //Green
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 33);
