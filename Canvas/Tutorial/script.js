var canvas = document.querySelector('canvas');

canvas.width = 800;
canvas.height = 800;

var c = canvas.getContext('2d');

// Background Color
c.fillStyle = "#222"
c.fillRect(0, 0, canvas.width, canvas.height);


// Cube
c.fillStyle = "#f23";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "#f90"
c.fillRect(400, 100, 100, 100);
c.fillStyle = "#add999"
c.fillRect(300, 300, 100, 100);
console.log(canvas);

// Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#dd1baa";
c.stroke();

// Arc / Circle
c.beginPath();
c.arc(200, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = "blue"
c.stroke();

// Circles in loop
setInterval(()=>{
for(let i = 0; i < 1; i++){

    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var color = `hsl(${Math.floor(Math.random() * 300)}, 100%, 50%`;
    console.log(color);

    c.beginPath();
    c.arc(x, y, Math.random() * 50, 0, Math.PI * 2, false);
    c.strokeStyle = color;
    c.stroke();
}
}, 150)