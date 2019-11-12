/*
const userFirstValue = prompt();
const userFirstNumber = +userFirstValue;


if (Number.isNaN (userFirstNumber)) {
    alert("Invalid value");
}
else {
    if (userFirstNumber % 2 === 0 || userFirstNumber % 3 === 0 || userFirstNumber % 5 === 0 )
    {
        alert("value is multiple of 2, 3 or 5")
    }
    else {
        alert("value is not multiple of 2, 3 and 5")
    }
}
 */
const userFirstValue = prompt("Please input first value");
const userFirstNumber = +userFirstValue;
const userSecondValue = prompt("Please input second value");
const userSecondNumber = +userSecondValue;
const operationMark = prompt ("Please input operation mark");


function sum(a, b) {
        if (Number.isNaN(a) || Number.isNaN(b))
        {
            Alert ("Invalid number a or/and b")

        }
        else {
        }
        return +a + +b;
    }

    function sub(a, b) {
        if (Number.isNaN(a) || Number.isNaN(b))
        {
            Alert ("Invalid number a or/and b")

        }
        return a - b;
    }

    function mul(a, b) {
        if (Number.isNaN(a) || Number.isNaN(b))
        {
            Alert ("Invalid number a or/and b")

        }
        return a * b;
    }

    function div(a, b) {
        if (Number.isNaN(a) || Number.isNaN(b))
        {
            Alert ("Invalid number a or/and b")

        }
        return a / b;
    }


    /*if(mark === "+") {
        alert(sum(userFirstNumber, userSecondNumber));
    }
    else if (mark === "-") {
        alert(sub(userFirstNumber, userSecondNumber));
    }

    else if (mark === "*") {
        alert(mul(userFirstNumber, userSecondNumber));
    }

    else if (mark === "/") {
        alert(div(userFirstNumber, userSecondNumber));
    }
    else {
        alert ("Invalid operation mark");
    }
    */
    switch (operationMark) {
        case "sum":
        case "+": {
            alert(userFirstNumber + "+" + userSecondNumber + "=" + sum(userFirstNumber, userSecondNumber));
        }
        break;
        case "substract":
        case "-": {
            alert(userFirstNumber + "-" + userSecondNumber + "=" + sub(userFirstNumber, userSecondNumber));
        }
        break;
        case "multiply":
        case "*": {
            alert(userFirstNumber + "*" + userSecondNumber + "=" + mul(userFirstNumber, userSecondNumber));
        }
        break;
        case "divide":
        case "/": {
            alert(userFirstNumber + "/" + userSecondNumber + "=" + div(userFirstNumber, userSecondNumber));
        }
        break;
        default: {
            alert ("Invalid operation mark");
        }
        break;
    }