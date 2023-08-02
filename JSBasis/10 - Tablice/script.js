// Tablice

var br = '<br>'

var result = document.getElementById('result');
var mission = document.getElementById('mission');

var arr = new Array('Poniedziałek', 'Wtorek', 'Środa');

result.innerHTML += arr[0]+br;
arr[3] = 'Czwartek';
result.innerHTML += arr[3]+br;
arr[4] = 'Piątek';
arr[5] = 'Sobota';
arr[6] = 'Niedziela';
result.innerHTML += `Dlugość = ${arr.length+br}`;
console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     mission.innerHTML += arr[i]+br;
// }

arr.forEach(x => mission.innerHTML += x+br); // <--- lepsze rozwiązanie!

var arr2 = new Array(3);
arr2[0] = 10;
arr2[1] = true;
arr2[2] = 'Javascript';
console.log(arr2);

var arr3 = ['Wiosna', 'Lato', 'Jesień', 'Zima'];
console.log(arr3);

var arr4 = arr.concat(arr2).concat(arr3);
console.log(arr4);