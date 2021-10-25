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