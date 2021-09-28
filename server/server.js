const { response } = require('express');
const http = require('http'); 
const express = require('express'); 
const app = express(); 
const httpServer = require('http').createServer(app); 
const mysql = require('mysql'); 
const path = require('path'); 

app.use(express.json());
app.use(express.urlencoded({extended: true})); 

const getQuestionJson = (results) => {
    let jsonResult = {questions: [{questionText: results['questionText'], 
                           answer1: results['answer1'],
                           answer2: results['answer2'],
                           answer3: results['answer3'], 
                           answer4: results['answer4'],
                           correctAnswer: results['correctAnswer']}]
                          }
    return jsonResult;  
}

var con = mysql.createConnection({
  host: "107.180.1.16",
  user: "fall2021group4",
  password: "fall2021group4",
  database: "cis4402021group4"
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html'); 
}); 

app.get('/users', (req, res) => {
  res.contentType('application/json');
  con.query('SELECT * FROM users', (err, rows) => {
    if (err) throw err; 
    console.log(rows); 
    res.send(rows); 
    con.end(); 
  }); 
}); 

app.post('/create-account', (req, res) => {
  // inserting data into the database with create-account
  // post requests have a body that can be accessed through req.body
  let sql = `INSERT INTO users (username, password) VALUES (?, ?)`
  con.query(sql, [req.body.username, req.body.password], (err, results) => {
    if (err) {
      res.send({accountCreated: false, error: err}); 
    }
    else res.send({accountCreated: true});  
  }); 
  // querying the new information that has been just added and logging it
  // to the console so we can know what we are seeing
  // let querySql = `SELECT * FROM users WHERE username = ? AND password = ?` 
  // con.query(querySql, [username, password], (err, results) => {
  //   console.log(results); 
  // });
});

app.post('/validate-login', (req, res) => {
  // we are going to be sending a json back to the page, so we have to make sure
  // to set the content type so it sends correctly
  res.contentType('application/json'); 
  
  let sql = `SELECT * FROM users WHERE username = ? AND password = ?`
  
  con.query(sql, [req.body.username, req.body.password], (err, results) => {
    if (String(err).length > 0 && err !== null) {
      console.log(`error: ${err}`); 
    }
    try {
      // if there are any results, the user exists in the database, so we reuse
      if (results.length === 0) {
        console.log(results); 
        res.json({loginValid: false}); 
      }
      else {
        console.log(results); 
        res.json({loginValid: true}); 
      }
      // still trying to figure out how to send a file from the parent directory since apparently 
      // using .. is a big nono to express for security reasons 
      // else {
      //   res.sendFile('index.html', {root: '../'});
      // }
    } 
    catch (e) {
      console.log(e); 
      console.log('error with /validate-login'); 
    } 
  });
});

app.get('/science', (req, res) => {

  let sql = `SELECT * FROM questions `


}); 

app.get('/math', (req, res) => {

}); 

app.get('/general', (req, res) => {
  let sql = `SELECT questionText, answer1, answer2, answer3, answer4, correctAnswer
             FROM questions
             WHERE quizId = 1
             ORDER BY RAND()
             LIMIT 5;`;
  con.query(sql, [], (err, results) => {
    if (err) throw (err); 
    res.json(getQuestionJson(results)); 
  }); 
}); 

// Host: 107.180.1.16
// Port: 3306
// Username: 2021group4
// PW: group4fall2021
// default schema: cis440fall2021group4

httpServer.listen(4545, () => console.log('listening on port 4545')); 
