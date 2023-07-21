
// Instrukcje wyboru

    var box = document.getElementById('result');
    var color = "blue";

switch(color){ // trzeba zadeklarować zmienną do której chcemy się odnosić
    case "red": // if (color == "red")
        box.style.backgroundColor = "red";
        box.innerHTML = "Red"
    break;
    
    case "blue": // else if (color == "blue")
        box.style.backgroundColor = "blue";
        box.innerHTML = "Blue"
    break;
    
    case "green": // else if (color == "green")
        box.style.backgroundColor = "green";
        box.innerHTML = "Green"
    break;

    default: // else
        box.style.backgroundColor = "grey";
    break;
}

    var box2 = document.getElementById('number');
    var number = 2;

switch(number){
    case 0: // if (number == 0) // case zaczynamy numerować od 0
        box2.style.backgroundColor = "red";
        box2.innerHTML = "0";
    break;
    
    case 1: // else if (number == 1)
        box2.style.backgroundColor = "blue";
        box2.innerHTML = "1";
    break;
    
    case 2: // else if (number == 2)
        box2.style.backgroundColor = "green";
        box2.innerHTML = "2";
    break;

    default: // else
        box2.style.backgroundColor = "grey";
    break;
}