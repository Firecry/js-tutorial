// Instrukcje warunkowe

// document.getElementById('result').innerHTML = 'Hello World';

var result = document.getElementById('result');

var x = 5, y = 10;
var age = 16;
var num = 10;


if( x < y ){
    result.innerHTML = `true`;
    console.log(true);
}                                                    // true
else{
    result.innerHTML = `false`;
    console.log(false);
}

x < y ? console.log(true) : console.log(false);      // true



    console.log('--------------');



if( age >= 18 ){
    result.innerHTML = `Pełnoletni`;
    console.log('Pełnoletni');
}                                                    // 'Niepełnoletni'
else{
    result.innerHTML = `Niepełnoletni`;
    console.log('Niepełnoletni');
}

age >= 18 ? console.log('Pełnoletni') : console.log('Niepełnoletni'); // 'Niepełnoletni'



    console.log('--------------');



if( num > 0 ){
    result.innerHTML = "Dodatnia";
    console.log('Dodatnia');
}
else if( num == 0 ){
    result.innerHTML = "Równa 0";                     // 'Dodatnia'
    console.log('Równa 0');
}
else{
    result.innerHTML = "Ujemna";
    console.log('Ujemna');
}

num > 0 ? console.log('Dodatnia') : num == 0 ? console.log('Równa 0') : console.log('Ujemna'); // 'Dodatnia'