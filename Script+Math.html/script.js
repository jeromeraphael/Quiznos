"use strict;"

let correct = 0;
let answered = 0;

// retrieving SQL data here
// insert SQL data into the following arrays
let questions = ['Q1 Population Test', 'Q2 Population Test', 'Q3 Population Test', 'Q4 Population Test', 'Q5 Population Test'];
let answers = [1, 2, 3, 4, 5];
let wrongAns1 = ['a', 'b', 'c', 'd', 'e'];
let wrongAns2 = ['q', 'w', 'e', 'r', 't'];
let wrongAns3 = ['a', 's', 'd', 'f', 'g'];

function populateQuestions() {

    // getting current questions and answers
     let questionList = document.getElementsByClassName("question");
     let answerList = document.getElementsByClassName("correctAnswer");
     let wrongAns1List = document.getElementsByClassName("wrongAns1");
     let wrongAns2List = document.getElementsByClassName("wrongAns2");
     let wrongAns3List = document.getElementsByClassName("wrongAns3");

    // changing current questions and answers to stored info
    for (i = 0; i < questionList.length; i++) {
        questionList[i].innerHTML = questions[i];
        answerList[i].innerHTML = answers[i];
        wrongAns1List[i].innerHTML = wrongAns1[i];
        wrongAns2List[i].innerHTML = wrongAns2[i];
        wrongAns3List[i].innerHTML = wrongAns3[i];
    }

 }

function testAnswer1(button) {
    switch (button) {
        case '1':
            // setTimeout makes the alert appear after the changes to buttons are made
            setTimeout(function () { alert('Damn you got it right bro'); }, 0);
            correct++;
            break;
        case '2':
            document.getElementById('do1').style.backgroundColor = 'Red';
            if (isNumeric(document.getElementById('c1').textContent) == true) {
                let x = document.getElementById('c1').textContent;
                let rounded = Math.round(x * 100) / 100;
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + rounded + " Rounded: " + " (" + x + ")"); }, 0);
            }
            else
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c1').textContent); }, 0);
            break;

        case '3':
            document.getElementById('do2').style.backgroundColor = 'Red';
            if (isNumeric(document.getElementById('c1').textContent) == true) {
                let x = document.getElementById('c1').textContent;
                let rounded = Math.round(x * 100) / 100;
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + rounded + " Rounded: " + " (" + x + ")"); }, 0);
            }
            else 
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c1').textContent); }, 0);
            break;
        case '4':
            document.getElementById('do3').style.backgroundColor = 'Red';
            if (isNumeric(document.getElementById('c1').textContent) == true) {
                let x = document.getElementById('c1').textContent;
                let rounded = Math.round(x * 100) / 100;
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + rounded + " Rounded: " + " (" + x + ")"); }, 0);
            }
            else
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c1').textContent); }, 0);
            break;
    }

    var x = document.getElementsByClassName("q1button");
    for (var i = 0; i < x.length; i++) {
        x[i].disabled = true;
    }

    document.getElementById('c1').style.backgroundColor = 'Green';
    answered++;
    result()
}


function testAnswer2(button) {
    switch (button) {
        case '1':
            setTimeout(function () { alert('Damn you got it right bro'); }, 0);
            correct++;
            break;
        case '2':
            document.getElementById('dt1').style.backgroundColor = 'Red';
            if (isNumeric(document.getElementById('c2').textContent) == true) {
                let x = document.getElementById('c2').textContent;
                let rounded = Math.round(x * 100) / 100;
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + rounded + " Rounded: " + " (" + x + ")"); }, 0);
            }
            else
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c2').textContent); }, 0);
            break;
        case '3':
            document.getElementById('dt2').style.backgroundColor = 'Red';
            if (isNumeric(document.getElementById('c2').textContent) == true) {
                let x = document.getElementById('c2').textContent;
                let rounded = Math.round(x * 100) / 100;
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + rounded + " Rounded: " + " (" + x + ")"); }, 0);
            }
            else
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c2').textContent); }, 0);
            break;
        case '4':
            document.getElementById('dt3').style.backgroundColor = 'Red';
            if (isNumeric(document.getElementById('c2').textContent) == true) {
                let x = document.getElementById('c2').textContent;
                let rounded = Math.round(x * 100) / 100;
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + rounded + " Rounded: " + " (" + x + ")"); }, 0);
            }
            else
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c2').textContent); }, 0);
            break;
    }

    var x = document.getElementsByClassName("q2button");
    for (var i = 0; i < x.length; i++) {
        x[i].disabled = true;
    }

    document.getElementById('c2').style.backgroundColor = 'Green';
    answered++;
    result()
}

function testAnswer3(button) {
    switch (button) {
        case '1':
            setTimeout(function () { alert('Damn you got it right bro'); }, 0);
            correct++;
            break;
        case '2':
            document.getElementById('dth1').style.backgroundColor = 'Red';
            if (isNumeric(document.getElementById('c3').textContent) == true) {
                let x = document.getElementById('c3').textContent;
                let rounded = Math.round(x * 100) / 100;
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + rounded + " Rounded: " + " (" + x + ")"); }, 0);
            }
            else
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c3').textContent); }, 0);
            break;
        case '3':
            document.getElementById('dth2').style.backgroundColor = 'Red';
            if (isNumeric(document.getElementById('c3').textContent) == true) {
                let x = document.getElementById('c3').textContent;
                let rounded = Math.round(x * 100) / 100;
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + rounded + " Rounded: " + " (" + x + ")"); }, 0);
            }
            else
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c3').textContent); }, 0);
            break;
        case '4':
            document.getElementById('dth3').style.backgroundColor = 'Red';
            if (isNumeric(document.getElementById('c3').textContent) == true) {
                let x = document.getElementById('c3').textContent;
                let rounded = Math.round(x * 100) / 100;
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + rounded + " Rounded: " + " (" + x + ")"); }, 0);
            }
            else
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c3').textContent); }, 0);
            break;
    }

    var x = document.getElementsByClassName("q3button");
    for (var i = 0; i < x.length; i++) {
        x[i].disabled = true;
    }

    document.getElementById('c3').style.backgroundColor = 'Green';
    answered++;
    result()
}

function testAnswer4(button) {
    switch (button) {
        case '1':
            setTimeout(function () { alert('Damn you got it right bro'); }, 0);
            correct++;
            break;
        case '2':
            document.getElementById('df1').style.backgroundColor = 'Red';
            if (isNumeric(document.getElementById('c4').textContent) == true) {
                let x = document.getElementById('c4').textContent;
                let rounded = Math.round(x * 100) / 100;
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + rounded + " Rounded: " + " (" + x + ")"); }, 0);
            }
            else
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c4').textContent); }, 0);
            break;
        case '3':
            document.getElementById('df2').style.backgroundColor = 'Red';
            if (isNumeric(document.getElementById('c4').textContent) == true) {
                let x = document.getElementById('c4').textContent;
                let rounded = Math.round(x * 100) / 100;
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + rounded + " Rounded: " + " (" + x + ")"); }, 0);
            }
            else
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c4').textContent); }, 0);
            break;
        case '4':
            document.getElementById('df3').style.backgroundColor = 'Red';
            if (isNumeric(document.getElementById('c4').textContent) == true) {
                let x = document.getElementById('c4').textContent;
                let rounded = Math.round(x * 100) / 100;
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + rounded + " Rounded: " + " (" + x + ")"); }, 0);
            }
            else
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c4').textContent); }, 0);

            break;
    }

    var x = document.getElementsByClassName("q4button");
    for (var i = 0; i < x.length; i++) {
        x[i].disabled = true;
    }

    document.getElementById('c4').style.backgroundColor = 'Green';
    answered++;
    result()
}

function testAnswer5(button) {
    switch (button) {
        case '1':
            setTimeout(function () { alert('Damn you got it right bro'); }, 0);
            correct++;

            break;
        case '2':
            document.getElementById('dfi1').style.backgroundColor = 'Red';
            if (isNumeric(document.getElementById('c5').textContent) == true) {
                let x = document.getElementById('c5').textContent;
                let rounded = Math.round(x * 100) / 100;
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + rounded + " Rounded: " + " (" + x + ")"); }, 0);
            }
            else
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c5').textContent); }, 0);
            break;
        case '3':
            document.getElementById('dfi2').style.backgroundColor = 'Red';
            if (isNumeric(document.getElementById('c5').textContent) == true) {
                let x = document.getElementById('c5').textContent;
                let rounded = Math.round(x * 100) / 100;
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + rounded + " Rounded: " + " (" + x + ")"); }, 0);
            }
            else
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c5').textContent); }, 0);
            break;
        case '4':
            document.getElementById('dfi3').style.backgroundColor = 'Red';
            if (isNumeric(document.getElementById('c5').textContent) == true) {
                let x = document.getElementById('c5').textContent;
                let rounded = Math.round(x * 100) / 100;
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + rounded + " Rounded: " + " (" + x + ")"); }, 0);
            }
            else
                setTimeout(function () { alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c5').textContent); }, 0);
            break;
    }

    var x = document.getElementsByClassName("q5button");

    for (var i = 0; i < x.length; i++) {
        x[i].disabled = true;
    }

    document.getElementById('c5').style.backgroundColor = 'Green';
    answered++;
    result()
}

function isNumeric(num) {
    return !isNaN(num)
}

function result() {
    if (answered == 5) {
        let score = correct / answered;
        setTimeout(function () { alert('BRO! You scored ' + score * 100 + '%'); }, 40);
    }
}