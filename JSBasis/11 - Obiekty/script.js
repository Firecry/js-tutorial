// Obiekty

var result = document.getElementById('result');


// sposób nr 1
var adam = {
    name: 'Adam',
    age: 25,
    show(){
        return `Imię: ${this.name}, wiek: ${this.age}<br>`
    }
};

console.log(adam);
result.innerHTML += adam.name;
result.innerHTML += ` lat: ${adam['age']}<br>`;

result.innerHTML += adam.show();


// sposób nr 2
function Person(name, age){
    this.name = name;
    this.age = age;
    this.show = ()=>{
        return `Imię: ${this.name}, wiek: ${this.age}<br>`
    }
};

var bartek = new Person('Bartek', 32);

console.log(bartek);
result.innerHTML += `${bartek.name}<br>`;

var ola = new Person('Ola', 22);
console.log(ola);

result.innerHTML += bartek.show();
result.innerHTML += ola.show();
