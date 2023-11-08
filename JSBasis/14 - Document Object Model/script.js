// DOM

var placeholder = document.getElementById('placeholder');
placeholder.innerText = "JavaSzcript";

var goods = document.getElementsByClassName('good');
console.log(goods);

for (let i = 0; i < goods.length; i++){
    goods[i].innerText += ' ✓';
};

var li = document.getElementsByTagName('li');
console.log(li);

var newLi = document.createElement('li');
var text = document.createTextNode('Tekst 6');
newLi.appendChild(text);

var list = document.getElementById('list');
list.appendChild(newLi);

var newLi2 = document.createElement('li');
var text2 = document.createTextNode('Tekst 3');
newLi2.appendChild(text2);

list.insertBefore(newLi2, document.getElementById('li4'));

var firstLi = list.firstElementChild;

var newLi3 = document.createElement('li');
var text3 = document.createTextNode('Nagłówek');
newLi3.appendChild(text3);
newLi3.classList.add('good');

list.replaceChild(newLi3, firstLi);

list.appendChild(list.lastElementChild.cloneNode(true));
list.removeChild(list.lastElementChild);
var last = list.lastElementChild;
// ...

last.parentNode.removeChild(last);