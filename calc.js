const numberButtons = document.querySelectorAll(".number");
const totalBox = document.querySelector("#total");
const calculationsBox = document.querySelector("#calculations");
let lastButton = "=";
let lastOperation = "";
let firstNum;
let secondNum;

Array.from(numberButtons).forEach(element => {
    element.addEventListener("click", () => {
        if(isOperator(lastButton))
        {
            totalBox.textContent = element.textContent;
        }
        else
        {
            totalBox.textContent += element.textContent;
        }

        lastButton = element.textContent;
    });
});

const operationButtons = document.querySelectorAll(".operation");
[...operationButtons].forEach(element => {
    element.addEventListener("click", () => {
        firstNum = parseFloat(totalBox.textContent);
        calculationsBox.textContent = totalBox.textContent + " " + element.textContent;
        
        lastButton = element.textContent;
        lastOperation = element.textContent;
    });
});

function Calculate()
{
    let secondNum = parseFloat(totalBox.textContent);
    //take current and use last operation to add
    totalBox.textContent = Arithmetic(lastOperation, firstNum, secondNum);

}

function Arithmetic(operator, first, second)
{
    switch(operator)
    {
        case '+':
            return first + second;
            break;
        case '-':
            return first - second;
            break;
        case 'X':
            return first * second;
            break;
        case '/':
            return first / second;
            break;
    }
}

function isOperator(i)
{
    if(i == '+' ||
    i == '-' ||
    i == '/' ||
    i == 'X' ||
    i == '=')
        return true;

    return false;
}

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => {
    if(lastButton == equalsButton.textContent)
    {
        firstNum = parseFloat(totalBox.textContent);
        calculationsBox.textContent = firstNum + " " + lastOperation + " " + secondNum;
        totalBox.textContent = Arithmetic(lastOperation, firstNum, secondNum);

    }
    else
    {
        secondNum = parseFloat(totalBox.textContent);
        calculationsBox.textContent += " " + secondNum;
        Calculate();
    }

    lastButton = equalsButton.textContent;
});

const clearEntryButton = document.querySelector("#clearEntry");
clearEntryButton.addEventListener("click", () => {
    totalBox.textContent = "";
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    totalBox.textContent = "";
    calculationsBox.textContent = "";
    lastOperation = "";
    lastButton = "=";
    firstNum = null;
    secondNum = null;
});

