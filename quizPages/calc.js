// Jerome Cabacungan, P1, CIS 425, 3 pm
// Apologies for multiple comments. Helps me visualize the application.

// Global Variables

let queue = [];
let input = 0;

//First function is to be implemented as it is critical especially for last function for calculator
function addToQueue(input) {
    queue.push(input);
}//add to array through the .push() function

function clearAll() 
{
    queue = [];
    input = 0;
    document.getElementById("display").innerHTML = "0";
}//clear display

function numericButton(arg) {
    if (document.getElementById("display").innerHTML === "ERROR" || (document.getElementById("display").innerHTML == "0" && arg != "."))
    { 
        document.getElementById("display").innerHTML = ""; 
    }

    // Was able to utilize a function for strings called .match(): https://www.w3schools.com/jsref/jsref_match.asp
    if (!(arg === ".") || !input.match(/[.]/)) 
    {
        input += arg;
        document.getElementById("display").innerHTML += arg;
    }


}
function operatorButton(arg) {
    if (input !== 0 && input !== "-") 
    {
        input = parseFloat(input);
        addToQueue(input);
        addToQueue(arg);
        document.getElementById("display").innerHTML += arg;
        input = 0;
    }

    if (arg == "-" && isNaN(queue[0]) && input !== "-")
    {
        input = "-";
        document.getElementById("display").innerHTML = "-";
    }
}//operators

function calculateQueue(value) 
{
    if (input !== 0)
    {
        input = parseFloat(input);
        addToQueue(input);
    }

    let answer = value[0];
    let dividedByZero = 0;

    for (let i = 2; i < value.length; i = i + 2) {

        switch (queue[i - 1]) 
        {
            case '+':
                answer += value[i];
                break;
            case '-':
                answer -= value[i];
                break;
            case '/':
                if (value[i] === 0)
                {
                    dividedByZero = 1;
                }
                else
                {
                    answer = answer / value[i];
                }

                break;
            case '*': 
                answer = answer * value[i];
                break;
            //no need for defaults
        }

    }
    //Limit our answers to 10 decimal places
    answer = answer.toFixed(10);
    answer = parseFloat(answer);
    if (dividedByZero === 1) {
        clearAll();
        document.getElementById("display").innerHTML = "NaN";
    }
    else {
        document.getElementById("display").innerHTML = answer;
        input = answer;
        queue = [];
    }


}//calculate





// let numberArray = [];
// let input = 0;


// function addToArray(input) {
//     numberArray.push(input);
// }

// function clear() {
//     numberArray = [];
//     input = 0;
//     document.getElementById("display").innerHTML = "0";
// }


// function operatorButton(arg) {
//     if (input !== 0 && input !== "-") {
//         input = parseFloat(input);

//         addToArray(input);
//         addToArray(arg);

//         document.getElementById("display").innerHTML += arg;
//         input = 0;
//     }

//     if (arg == "-" && isNaN(numberArray[0]) && input !== "-") {
//         input = "-";
//         document.getElementById("display").innerHTML = "-";
//     }
// }


// function numbers(arg) {
//     if (document.getElementById("display").innerHTML === "ERROR" || (document.getElementById("display").innerHTML == "0" && arg != ".")) {
//         document.getElementById("display").innerHTML = "";
//     }


//     if (!(arg === ".") || !input.match(/[.]/)) {
//         input += arg;
//         document.getElementById("display").innerHTML += arg;
//     }
// }//numbers


// function calculate(value) {
//     if (input !== 0) {
//         input = parseFloat(input);

//         addToArray(input);
//     }

//     let answer = value[0];
//     let dividedByZero = 0;

//     //Catches division by zero
//     if (dividedByZero === 1) {
//         clear();
//         document.getElementById("display").innerHTML = "NaN";
//     }
//     else {
//         document.getElementById("display").innerHTML = answer;
//         input = answer;
//         numberArray = [];
//     }

//     for (let i = 2; i < value.length; i = i + 2) {

//         switch (numberArray[i - 1]) {
//             case '+':
//                 answer += value[i];
//                 break;
//             case '-':
//                 answer -= value[i];
//                 break;
//             case '/':
//                 if (value[i] === 0) {
//                     dividedByZero = 1;
//                 }
//                 else {
//                     answer = answer / value[i];
//                 }

//                 break;
//             case '*': answer = answer * value[i];
//                 break;

//         }
//     }


//     answer = answer.toFixed(10);
//     answer = parseFloat(answer);
// }