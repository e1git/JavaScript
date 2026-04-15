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
