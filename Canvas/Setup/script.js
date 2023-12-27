// Setup
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables
var mouse = {
    x: undefined,
    y: undefined
}

var colorPalette = [
    '#845EC2',
    '#D65DB1',
    '#FF6F91',
    '#FF9671',
    '#FFC75F',
    '#F9F871'
];

// Events
window.addEventListener('mousemove', (e)=>{
    mouse.x = e.x;
    mouse.y = e.y;
})

window.addEventListener('resize', ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
})

// Functions
function randomIntFromRange(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colorPalette) {
    return colorPalette[Math.floor(Math.random() * colorPalette.length)];
}

// Objects
function Object(x, y, radius, color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.update = ()=>{
        this.draw();
    }

    this.draw = ()=>{
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath;
    }
}

// Implementation
let objects;
function init(){
    objects = []

    for(let i = 0; i < 100; i++){
        // objects.push()
    }
}

// Animation Loop
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    c.fillStyle = '#222';
    c.fillRect(0, 0, canvas.width, canvas.height);

    // objects.forEach(object => {
    //     objects.update();
    // })

    c.fillStyle = "#f23";
    c.fillRect(mouse.x, mouse.y, 20, 20);
}

init();
animate();