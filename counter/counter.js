let counter = 0;
const element = document.getElementById('counter-value');
element.className = 'counter-value';




document.getElementById('increment-button').onclick = function() {
    counter++;
    document.getElementById('counter-value').innerText = counter;
};

document.getElementById('decrement-button').onclick = function() {
    counter--;
    document.getElementById('counter-value').innerText = counter;
};

document.getElementById('reset-button').onclick = function() {
    counter = 0;
    document.getElementById('counter-value').innerText = counter;
};
