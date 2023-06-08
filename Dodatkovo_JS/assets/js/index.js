//Task1
// Написати функцію, яка приймає 2 числа та повертає меньше з них.

function lesserNumber(a, b) {
    return a > b ? b : a;
}

function showLesserNumber() {
    const firstNumber = document.getElementById('first_number').value;
    const secondNumber = document.getElementById('second_number').value;
    document.getElementById('result').value = lesserNumber(firstNumber, secondNumber);
}


// Написати функцію, яка приймає 2 числа, знак між ними та повертає результат.

function calc(a, b, symbol) {
    switch (symbol) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            return a / b;
        case '*':
            return a * b;
        default:
            return 'please provaid valid symbol'
    }

}

function showCalc() {
    const firstNumber = +document.getElementById('calc_fnumber').value;
    const secondNumber = +document.getElementById('calc_snumber').value;
    const symbol = document.getElementById('symbol_for_calc').value;
    console.log('symbol', symbol)
    document.getElementById('calculatore').value = calc(firstNumber, secondNumber, symbol);
}

//  Написати функцію, яка приймає число та виводить таблицю множення для цього числа. Викликати функцію для чисел від 2 до 9.

function tablMnog(a) {
    const table = []
    for (let i=1; i<=10; i++) {
        table.push(`${a} * ${i} = ${a*i}`) 
    }
    return table;
}

function showTablMnog() {
    let result = '';
    for (let i=2; i<=9; i++) {
        result+=`<div class="grid_item">
        <p>${tablMnog(i).join('</p><p>')}</p>
        </div>`
        }
       document.getElementById('tableMbog').innerHTML=result;
}

showTablMnog();

// Написати функцію, яка повертає суму значень переданих параметрів.

function argumentSym() {
    let result =0;
    for( let i = 0; i<arguments.length; i++) {
        result+=arguments[i];

    }
    return result
}



