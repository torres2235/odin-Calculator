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
let x;
let y;
let op = '';
let total;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => { //updates our string with the number we pressed
        if(input.length < 19) {
            input = input + button.textContent;
            document.querySelector('#display').textContent = input;
        }
        if(button.id == 'clear') {//clears our display and our "input" string
            input = '';
            x = !x;
            y = !y;
            op = '';
            total = !total;
            document.querySelector('#display').textContent = '0';
        }
        
        if(button.id == 'add' || button.id == 'sub' || button.id == 'multiply' || button.id == 'divide') {
            x = parseInt(input);
            op = String(button.id);
            //console.log(x);
            //console.log(op);
            input = '';
            document.querySelector('#display').textContent = '0';
        }

        if(button.id == 'equal') {
            if(!x || !op) {
                //console.log("ERROR");
                input = '';
                document.querySelector('#display').textContent = '0';
            } else {
                y = parseInt(input);
                //console.log(y);

                total = operate(x, y, op);
                document.querySelector('#display').textContent = total;
                x = total;
            }


        }
    });
});
    