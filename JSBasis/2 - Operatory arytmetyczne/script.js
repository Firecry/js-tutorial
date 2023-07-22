var x = 2;

console.log(5 + x); // 7
console.log(5 - x); // 3
console.log(5 * x); // 10
console.log(5 / x); // 2.5
console.log(5 ** x); // 25
console.log(5 % x); // 1 // 2 * 2 = 4 // 5 - 4 = 1

console.log('5' + 2); // '52'
console.log(5 + '2'); // '52'

console.log('5' * 2); // 10
console.log('5' * '2'); // 10
console.log('abc' * 2); // NaN

console.log(2 + 2 * 2); // 6
console.log((2 + 2) * 2); // 8

console.log('x = ' + x); // 'x = 2'

x += 5; // 7
x -= 5; // 2
x *= 5; // 10
x /= 2; // 5
x **= 2; // 25
x %= 2; // 1

console.log('x = ' + x); // 'x = 1'

x++; // 2
x++; // 3

console.log('x = ' + x); // 'x = 3'

x--; // 2

console.log('x = ' + x); // 'x = 2'

var y = x++; // post inkrementacja

console.log('y = ' + y); // 'y = 2'
console.log('x = ' + x); // 'x = 3'

y = ++x; // pre inkrementacja

console.log('y = ' + y); // 'y = 4'
console.log('x = ' + x); // 'x = 4'