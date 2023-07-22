
// Operatory porównania

    var x = 5 == 5;
    console.log(x); // true
    console.log(typeof(x)); // boolean

    console.log(5 == "5"); // true
    console.log(5 === "5"); // false

    console.log(5 != 5); // false
    console.log(5 != 0); // true
    console.log(5 != '5'); // false
    console.log(5 !== '5'); // true

    console.log(5 > 5); // false
    console.log(5 >= 5); // true

    console.log(5 < 5); // false
    console.log(5 <= 5); // true

// Operatory logiczne

    // AND

    console.log(true && false); // false
    console.log(true && true); // true

    // OR

        console.log(true || false); // true
        console.log(false || false); // false

    // XOR

        console.log(true ^ true); // 0 = false
        console.log(true ^ false); // 1 = true

    // NOT

        console.log(!5 > 0); // false

// AND > OR > XOR > NOT //
// &&  > || >  ^  >  !  //

    console.log((true || true) && !false ^ false); // 1 = true