// Function to draw a circle on a canvas
function drawCircle() {
    // Get the canvas element
    let canvas = document.getElementById('myCanvas');
    
    // Get the 2D context for drawing
    let ctx = canvas.getContext('2d');
    
    // Set canvas background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw a circle
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    let radius = 100;
    
    // Set circle properties
    ctx.fillStyle = '#667eea';
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fill();
    
    // Add a border to the circle
    ctx.strokeStyle = '#764ba2';
    ctx.lineWidth = 3;
    ctx.stroke();
}

// Draw the circle when the page loads
window.addEventListener('load', drawCircle);
