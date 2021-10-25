function add(x, y) {
    return x + y;
};

function sub(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    return x / y;
};

function operate(x, y, op) {
    switch(op) {
        case "add":
            return add(x, y);
            break;

        case "sub":
            return sub(x, y);
            break;

        case "multiply":
            return multiply(x, y);
            break;
        
        case "divide":
            return divide(x, y);
            break;

        default:
            console.log("invalid entries");
            break;
    }
};


let input = ''; //hold our string

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => { //updates our string with the number we pressed
        if(input.length < 19) {
            input = input + button.id;
            document.querySelector('#display').textContent = input;
        }
        if(button.id == 'clear') {//clears our display and our "input" string
            input = '';
            document.querySelector('#display').textContent = '0';
        }
        
    });
});
    