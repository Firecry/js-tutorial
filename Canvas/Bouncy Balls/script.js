var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Background Color
c.fillStyle = "#222"
c.fillRect(0, 0, canvas.width, canvas.height);

// Mouse Listener
var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;
var ballAmount = 5;

var colorPalette = [
    '#845EC2',
    '#D65DB1',
    '#FF6F91',
    '#FF9671',
    '#FFC75F',
    '#F9F871'
];

window.addEventListener('mousemove', (e)=>{
    mouse.x = e.x;
    mouse.y = e.y;
})

window.addEventListener('resize', ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
})

// Animated Circle
function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.mindx = dx;
    this.mindy = dy;
    this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];

    this.draw = ()=>{
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // c.strokeStyle = '#222';
        // c.stroke();
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

        if(this.dy < 30){
            this.dy+=0.1;
        }

        this.draw();
    }
}

var circleArray = []

function init(){
    circleArray = []

    for(let i = 0; i < (ballAmount + 1); i++){
        var x = Math.floor(Math.random() * (canvas.width - radius * 5) + radius);
        var y = Math.floor(Math.random() * (canvas.height - radius * 5) + radius);
        var dx = (Math.random() - .5) * 10;
        var dy = (Math.random() - .5);
        var radius = Math.random() * 15 + 3;

        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

function animate(){
    requestAnimationFrame(animate);
    // c.clearRect(0, 0, canvas.width, canvas.height);

    // c.fillStyle = '#222';
    // c.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }

    // Mouse Position
    // c.fillStyle = "#f23";
    // c.fillRect(mouse.x, mouse.y, 20, 20);
}

init();

animate();