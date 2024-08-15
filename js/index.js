"use strict";
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let inputString = "";
let buttonArray = Array.from(buttons);
buttonArray.forEach(button => {
    button.addEventListener('click', (e) => {
        let target = e.target;
        if (target.innerHTML === '=') {
            try {
                inputString = eval(inputString);
                input.value = inputString;
            }
            catch (error) {
                input.value = "Error";
                inputString = "";
            }
        }
        else if (target.innerHTML === 'AC') {
            inputString = "";
            input.value = inputString;
        }
        else if (target.innerHTML === 'DEL') {
            inputString = inputString.substring(0, inputString.length - 1);
            input.value = inputString;
        }
        else {
            inputString += target.innerHTML;
            input.value = inputString;
        }
    });
});
