const button0 = document.querySelector('#button0');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const button6 = document.querySelector('#button6');
const button7 = document.querySelector('#button7');
const button8 = document.querySelector('#button8');
const button9 = document.querySelector('#button9');

const buttonDivide = document.querySelector('#buttonDivide');
const buttonMultiply = document.querySelector('#buttonMultiply');
const buttonSubstract = document.querySelector('#buttonSubstract');
const buttonAdd = document.querySelector('#buttonAdd');

const buttonClear = document.querySelector('#buttonClear');
const buttonResult = document.querySelector('#buttonResult');
//possible to add all in one variable? (problems accessing single buttons from node object)
//const buttons = document.querySelectorAll('button');

const screen = document.querySelector('#screen');
//console.log(screen);

//console.log(button0);

/*
function log(clickedNumber) {
    let value = buttons[clickedNumber].value;
    console.log(value);
};  */

let flagResult = false;

function clearScreen() {
    if (screen.value == '÷' || screen.value == 'x' || screen.value == '-' || screen.value == '+' || flagResult == true) {
        screen.value = '';
        flagResult = false;
    }
}

button0.addEventListener('click', function() {
//    console.log(button0.value);
//    console.log(typeof(button0.value));
    clearScreen();
    screen.value += '0';
});
button1.addEventListener('click', function() {
//    console.log(button1.value);
    clearScreen();
    screen.value += '1';
});
button2.addEventListener('click', function() {
//    console.log(button2.value);
    clearScreen();
    screen.value += '2';
});
button3.addEventListener('click', function() {
//    console.log(button3.value);
    clearScreen();
    screen.value += '3';
});
button4.addEventListener('click', function() {
//    console.log(button4.value);
    clearScreen();
    screen.value += '4';
});
button5.addEventListener('click', function() {
//    console.log(button5.value);
    clearScreen();
    screen.value += '5';
});
button6.addEventListener('click', function() {
//    console.log(button6.value);
    clearScreen();
    screen.value += '6';
});
button7.addEventListener('click', function() {
//    console.log(button7.value);
    clearScreen();
    screen.value += '7';
});
button8.addEventListener('click', function() {
//    console.log(button8.value);
    clearScreen();
    screen.value += '8';
});
button9.addEventListener('click', function() {
//    console.log(button9.value);
    clearScreen();
    screen.value += '9';
});

/*let divArgument1 = '';
let divArgument2 = '';
let mulArgument1 = '';
let mulArgument2 = '';
let subArgument1 = '';
let subArgument2 = '';
let sumArgument1 = '';
let sumArgument2 = '';*/
let argument1 = '';
let argument2 = '';

/*
let flagDiv = false;
let flagMul = false;
let flagSub = false;
let flagAdd = false;
*/
let flagOperation = '';

buttonDivide.addEventListener('click', function() {
//    console.log('Divide');
    if (screen.value != '÷' && screen.value != 'x' && screen.value != '-' && screen.value != '+') {
        argument1 = screen.value;
    }
    screen.value = '÷';
    //console.log(argument1);
    /*flagDiv = true;
    flagMul = false;
    flagSub = false;
    flagAdd = false;*/
    flagOperation = 'divide';
});
buttonMultiply.addEventListener('click', function() {
//    console.log('Multiply');
    if (screen.value != '÷' && screen.value != 'x' && screen.value != '-' && screen.value != '+') {
        argument1 = screen.value;
    }
    screen.value = 'x';
    //console.log(argument1);
    /*flagMul = true;
    flagDiv = false;
    flagSub = false;
    flagAdd = false;*/
    flagOperation = 'multiply';
});
buttonSubstract.addEventListener('click', function() {
//    console.log('Substract');
    if (screen.value != '÷' && screen.value != 'x' && screen.value != '-' && screen.value != '+') {
        argument1 = screen.value;
    }
    screen.value = '-';
    //console.log(argument1);
    /*flagSub = true;
    flagDiv = false;
    flagMul = false;
    flagAdd = false;*/
    flagOperation = 'substract';
});
buttonAdd.addEventListener('click', function() {
//    console.log('Add');
    if (screen.value != '÷' && screen.value != 'x' && screen.value != '-' && screen.value != '+') {
        argument1 = screen.value;
    }
    screen.value = '+';
    //console.log(argument1);
    /*flagAdd = true;
    flagDiv = false;
    flagMul = false;
    flagSub = false;*/
    flagOperation = 'add';
});

buttonClear.addEventListener('click', function() {
//    console.log('Clear');
    screen.value = '';
});
buttonResult.addEventListener('click', function() {
//    console.log('Result');
    /*if (flagDiv == true) {
        console.log('Divide');
    } else if (flagMul == true) {
        console.log('Multiply');
    } else if (flagSub == true) {
        console.log('Substract');
    } else if (flagAdd == true) {
        console.log('Add');
    }*/

    if (screen.value == '÷' || screen.value == 'x' || screen.value == '-' || screen.value == '+') {
        argument2 = argument1;
    } else if (flagResult != true) {
        argument2 = screen.value;
    } else if (flagResult == true) {
        argument1 = screen.value;
    }
    let calcResult = '';
    switch (flagOperation) {
        case 'divide':
            console.log('Divide');
            if (Number(argument2) == 0) {
                calcResult = 'Cannot divide by zero';
            } else {
                calcResult = Number(argument1) / Number(argument2);
            }
            break;
        case 'multiply':
            console.log('Multiply');
            calcResult = Number(argument1) * Number(argument2);
            break;
        case 'substract':
            console.log('Substract');
            calcResult = Number(argument1) - Number(argument2);
            break;
        case 'add':
            console.log('Add');
            calcResult = Number(argument1) + Number(argument2);
            break;
    }

    console.log(calcResult);
    screen.value = calcResult;
    flagResult = true;

    //screen.value = 'Result';
});