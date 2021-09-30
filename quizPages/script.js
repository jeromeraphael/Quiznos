"use strict;"

let correct = 0;
let answered = 0;
let questions = [];
let answer1 = [];


let http = require("http");
let mysql = require("mysql");
let events = require("events");

let sqlquery = '';
let output = '';
let res;

let eventEmitter = new events.EventEmitter;

eventEmitter.on("processingFinished", processingFinishedHandler);

httpServer = http.createServer(processServerRequest);
httpServer.listen(3306);

function processServerRequest(request, response){
    console.log(`Processing: ${request.url}`);

    res = response;
    response.writeHead(200, {'Content-Type': 'text/html'});

    sqlquery = "SELECT questionText, answer1, answer2, answer3, correctAnswer FROM questions WHERE quizId = '1'"

    initializeDB();
}


function initializeDB(){
    let connectionString = {host: "107.180.1.16", database: "cis4402021group4", user: "fall2021group4", password: "fall2021group4"};

    console.log(connectionString);
    con = mysql.createConnection(connectionString);
    console.log("Connecting to database...");

    con.connect(
        function (err){
            if (err) throw err;
            console.log("Connected.");
        }
    );
    con.query(sqlquery, processResult);
    con.end();
}


function processResult(err, result){
    if (err) throw err;
    console.log('Retrieved information');
    result.forEach(printRecord);
    eventEmitter.emit("processingFinished");
}


function printRecord(record){
    output = document.getElementById("1").innerHTML = "X"
}

function processingFinishedHandler(){
    res.write(output);
    res.end();
}

function testAnswer1(button){
    function isNumeric(num){
        return !isNaN(num)
      } 

    switch (button){
        case '1':
            alert('Damn you got it right bro');
            correct++;
            answered++;

            break;
        case '2':
            if (isNumeric(document.getElementById('c1').textContent) == true)
            {
               let x = document.getElementById('c1').textContent;
               let rounded = Math.round(x * 100)/100;
               alert("Oof that ain't right chief. Correct answer is: " + " Rounded: " + rounded + " (" + x + ")");
            }
            else
            {
                alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c1').textContent);
            }
            
            answered++;
            document.getElementById('do1').style.backgroundColor = 'Red';
            break;
        case '3':
            if (isNumeric(document.getElementById('c1').textContent) == true)
            {
               let x = document.getElementById('c1').textContent;
               let rounded = Math.round(x * 100)/100;
               alert("Oof that ain't right chief. Correct answer is: " + " Rounded: " + rounded + " (" + x + ")");
            }
            else
            {
                alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c1').textContent);
            }
            answered++;
            document.getElementById('do2').style.backgroundColor = 'Red';
            break;
        case '4':
            if (isNumeric(document.getElementById('c1').textContent) == true)
            {
               let x = document.getElementById('c1').textContent;
               let rounded = Math.round(x * 100)/100;
               alert("Oof that ain't right chief. Correct answer is: " + " Rounded: " + rounded + " (" + x + ")");
            }
            else
            {
                alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c1').textContent);
            }
            answered++;
            document.getElementById('do3').style.backgroundColor = 'Red';
            break;
        }

        var x = document.getElementsByClassName("q1button");
        for (var i = 0; i < x.length; i++){
            x[i].disabled = true;
        }

        document.getElementById('c1').style.backgroundColor = 'Green';

        if (answered == 5){
            result()
        }
}

function testAnswer2(button){
    function isNumeric(num){
        return !isNaN(num)
    } 

switch (button){
    case '1':
        alert('Damn you got it right bro');
        correct++;
        answered++;

        break;
    case '2':
        if (isNumeric(document.getElementById('c2').textContent) == true)
        {
           let x = document.getElementById('c2').textContent;
           let rounded = Math.round(x * 100)/100;
           alert("Oof that ain't right chief. Correct answer is: " + " Rounded: " + rounded + " (" + x + ")");
        }
        else
        {
            alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c2').textContent);
        }
        
        answered++;
        document.getElementById('dt1').style.backgroundColor = 'Red';
        break;
    case '3':
        if (isNumeric(document.getElementById('c2').textContent) == true)
        {
           let x = document.getElementById('c2').textContent;
           let rounded = Math.round(x * 100)/100;
           alert("Oof that ain't right chief. Correct answer is: " + " Rounded: " + rounded + " (" + x + ")");
        }
        else
        {
            alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c2').textContent);
        }
        answered++;
        document.getElementById('dt2').style.backgroundColor = 'Red';
        break;
    case '4':
        if (isNumeric(document.getElementById('c2').textContent) == true)
        {
           let x = document.getElementById('c2').textContent;
           let rounded = Math.round(x * 100)/100;
           alert("Oof that ain't right chief. Correct answer is: " + " Rounded: " + rounded + " (" + x + ")");
        }
        else
        {
            alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c2').textContent);
        }

        answered++;
        document.getElementById('dt3').style.backgroundColor = 'Red';
        break;
    }

        var x = document.getElementsByClassName("q2button");
        for (var i = 0; i < x.length; i++){
            x[i].disabled = true;
        }

        document.getElementById('c2').style.backgroundColor = 'Green';

        if (answered == 5){
            result()
        }
}

function testAnswer3(button){
    function isNumeric(num){
        return !isNaN(num)
    } 

    switch (button){
        case '1':
            alert('Damn you got it right bro');
            correct++;
            answered++;

            break;
        case '2':
            if (isNumeric(document.getElementById('c3').textContent) == true)
            {
               let x = document.getElementById('c3').textContent;
               let rounded = Math.round(x * 100)/100;
               alert("Oof that ain't right chief. Correct answer is: " + " Rounded: " + rounded + " (" + x + ")");
            }
            else
            {
                alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c3').textContent);
            }

            answered++;
            document.getElementById('dth1').style.backgroundColor = 'Red';
            break;
        case '3':
            if (isNumeric(document.getElementById('c3').textContent) == true)
            {
               let x = document.getElementById('c3').textContent;
               let rounded = Math.round(x * 100)/100;
               alert("Oof that ain't right chief. Correct answer is: " + " Rounded: " + rounded + " (" + x + ")");
            }
            else
            {
                alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c3').textContent);
            }
            
            answered++;
            document.getElementById('dth2').style.backgroundColor = 'Red';
            break;
        case '4':
            if (isNumeric(document.getElementById('c3').textContent) == true)
            {
               let x = document.getElementById('c3').textContent;
               let rounded = Math.round(x * 100)/100;
               alert("Oof that ain't right chief. Correct answer is: " + " Rounded: " + rounded + " (" + x + ")");
            }
            else
            {
                alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c3').textContent);
            }
            
            answered++;
            document.getElementById('dth3').style.backgroundColor = 'Red';
            break;
        }

        var x = document.getElementsByClassName("q3button");
        for (var i = 0; i < x.length; i++){
            x[i].disabled = true;
        }

        document.getElementById('c3').style.backgroundColor = 'Green';

        if (answered == 5){
            result()
        }
}

function testAnswer4(button){
    function isNumeric(num){
        return !isNaN(num)
    } 

    switch (button){
        case '1':
            alert('Damn you got it right bro');
            correct++;
            answered++;

            break;
        case '2':
            if (isNumeric(document.getElementById('c4').textContent) == true)
            {
               let x = document.getElementById('c4').textContent;
               let rounded = Math.round(x * 100)/100;
               alert("Oof that ain't right chief. Correct answer is: " + " Rounded: " + rounded + " (" + x + ")");
            }
            else
            {
                alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c4').textContent);
            }
            
            answered++;
            document.getElementById('df1').style.backgroundColor = 'Red';
            break;
        case '3':
            if (isNumeric(document.getElementById('c4').textContent) == true)
            {
               let x = document.getElementById('c4').textContent;
               let rounded = Math.round(x * 100)/100;
               alert("Oof that ain't right chief. Correct answer is: " + " Rounded: " + rounded + " (" + x + ")");
            }
            else
            {
                alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c4').textContent);
            }
            
            answered++;
            document.getElementById('df2').style.backgroundColor = 'Red';
            break;
        case '4':
            if (isNumeric(document.getElementById('c4').textContent) == true)
            {
               let x = document.getElementById('c4').textContent;
               let rounded = Math.round(x * 100)/100;
               alert("Oof that ain't right chief. Correct answer is: " + " Rounded: " + rounded + " (" + x + ")");
            }
            else
            {
                alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c4').textContent);
            }
            
            answered++;
            document.getElementById('df3').style.backgroundColor = 'Red';
            break;
        }

        var x = document.getElementsByClassName("q4button");
        for (var i = 0; i < x.length; i++){
            x[i].disabled = true;
        }

        document.getElementById('c4').style.backgroundColor = 'Green';

        if (answered == 5){
            result()
        }
}

function testAnswer5(button){
    function isNumeric(num){
        return !isNaN(num)
    } 

    switch (button){
        case '1':
            alert('Damn you got it right bro');
            correct++;
            answered++;

            break;
        case '2':
            if (isNumeric(document.getElementById('c5').textContent) == true)
            {
               let x = document.getElementById('c5').textContent;
               let rounded = Math.round(x * 100)/100;
               alert("Oof that ain't right chief. Correct answer is: " + " Rounded: " + rounded + " (" + x + ")");
            }
            else
            {
                alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c5').textContent);
            }
            
            answered++;
            document.getElementById('dfi1').style.backgroundColor = 'Red';
            break;
        case '3':
            if (isNumeric(document.getElementById('c5').textContent) == true)
            {
               let x = document.getElementById('c5').textContent;
               let rounded = Math.round(x * 100)/100;
               alert("Oof that ain't right chief. Correct answer is: " + " Rounded: " + rounded + " (" + x + ")");
            }
            else
            {
                alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c5').textContent);
            }
            
            answered++;
            document.getElementById('dfi2').style.backgroundColor = 'Red';
            break;
        case '4':
            if (isNumeric(document.getElementById('c5').textContent) == true)
            {
               let x = document.getElementById('c5').textContent;
               let rounded = Math.round(x * 100)/100;
               alert("Oof that ain't right chief. Correct answer is: " + " Rounded: " + rounded + " (" + x + ")");
            }
            else
            {
                alert("Oof that ain't right chief. Correct answer is: " + document.getElementById('c5').textContent);
            }
            
            answered++;
            document.getElementById('dfi3').style.backgroundColor = 'Red';
            break;
        }

        var x = document.getElementsByClassName("q5button");
        for (var i = 0; i < x.length; i++){
            x[i].disabled = true;
        }

        document.getElementById('c5').style.backgroundColor = 'Green';

        if (answered == 5){
            result()
        }
}

function result(){
    if (answered == 5){
        let score = correct/answered;

        alert('BRO! You scored ' + score*100 + '%');
    }
}

timer();

document.getElementById("bb").addEventListener("click", timer);

function timer() {
  var sec = 90;

  function updateSec() {
    sec--;
    if (sec < 10) {
      document.querySelector("text").innerHTML = `&nbsp${sec}`;
    } else {
      document.querySelector("text").innerHTML = sec;
    }
    if (sec === 0) {
      stopTimer();
    }
  }
  updateSec();

  var interval = setInterval(updateSec, 1000);

  function stopTimer() {
    clearInterval(interval);
  }
}