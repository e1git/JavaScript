function drawTriangle(ctx, x, y, size, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);                      // top vertex
  ctx.lineTo(x + size, y + size);        // bottom right
  ctx.lineTo(x + size, y + size + 100);        // bottom right
  ctx.lineTo(x - size, y + size + 100);        // bottom left
  ctx.lineTo(x - size, y + size );

  ctx.closePath();
  ctx.fill();
}

function drawHorse(ctx, x, y) {
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;

  // Body
  ctx.beginPath();
  ctx.ellipse(x + 50, y + 50, 40, 20, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Head
  ctx.beginPath();
  ctx.ellipse(x + 100, y + 30, 15, 20, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Neck
  ctx.beginPath();
  ctx.moveTo(x + 80, y + 40);
  ctx.lineTo(x + 90, y + 30);
  ctx.stroke();

  // Legs
  ctx.beginPath();
  ctx.moveTo(x + 30, y + 70);
  ctx.lineTo(x + 30, y + 100);
  ctx.moveTo(x + 50, y + 70);
  ctx.lineTo(x + 50, y + 100);
  ctx.moveTo(x + 60, y + 70);
  ctx.lineTo(x + 60, y + 100);
  ctx.moveTo(x + 80, y + 70);
  ctx.lineTo(x + 80, y + 100);
  ctx.stroke();

  // Tail
  ctx.beginPath();
  ctx.moveTo(x + 10, y + 50);
  ctx.lineTo(x, y + 40);
  ctx.stroke();

  // Mane
  ctx.beginPath();
  ctx.moveTo(x + 90, y + 20);
  ctx.lineTo(x + 95, y + 10);
  ctx.moveTo(x + 95, y + 20);
  ctx.lineTo(x + 100, y + 10);
  ctx.stroke();
}

function draw(ctx) {
  ctx.fillStyle = "rgb(200 0 0)";
  ctx.fillRect(10, 10, 50, 50);

  ctx.fillStyle = "rgb(0 0 200 / 50%)";
  ctx.fillRect(30, 30, 150, 150);
  //ok
}

const canvas = document.getElementById("Canvas");
const ctx = canvas.getContext("2d");

//draw(ctx);
drawTriangle(ctx, 100, 1, 40, "rgb(0 200 0)");
drawTriangle(ctx, 150, 1, 40, "rgb(200, 0, 150)");
drawHorse(ctx, 50, 50);
