var canvas = document.querySelector('canvas');

canvas.width = 800;
canvas.height = 800;

var c = canvas.getContext('2d');

// Background Color
c.fillStyle = "#222"
c.fillRect(0, 0, canvas.width, canvas.height);


// // Cube
// c.fillStyle = "#f23";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "#f90"
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = "#add999"
// c.fillRect(300, 300, 100, 100);
// console.log(canvas);

// // Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#dd1baa";
// c.stroke();

// // Arc / Circle
// c.beginPath();
// c.arc(200, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "blue"
// c.stroke();

// // Circles in loop
// // setInterval(()=>{
// for(let i = 0; i < 3; i++){

//     var x = Math.random() * canvas.width;
//     var y = Math.random() * canvas.height;
//     var color = `hsl(${Math.floor(Math.random() * 300)}, 100%, 50%`;
//     console.log(color);

//     c.beginPath();
//     c.arc(x, y, Math.random() * 50, 0, Math.PI * 2, false);
//     c.strokeStyle = color;
//     c.stroke();
// }
// // }, 150)

// Animated Circle
function Circle(x, y, dx, dy, radius, color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;

    this.draw = ()=>{
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // c.strokeStyle = '#222';
        c.stroke();
        c.fill();
    }

    this.update = ()=>{
        if(this.x + this.radius > canvas.width || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if(this.y + this.radius > canvas.height || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

var circleArray = []

for(let i = 0; i < 100; i++){
    var x = Math.floor(Math.random() * (canvas.width - radius * 4) + radius);
    var y = Math.floor(Math.random() * (canvas.height - radius * 4) + radius);
    var dx = (Math.random() - .5);
    var dy = (Math.random() - .5);
    var radius = Math.random() * (40 - 10 * 2) + 10;
    var color = `hsl(${Math.floor(Math.random() * 300)}, 100%, 50%`;

    circleArray.push(new Circle(x, y, dx, dy, radius, color));
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    c.fillStyle = '#222';
    c.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }

    console.log(circleArray[1]);
}

animate();