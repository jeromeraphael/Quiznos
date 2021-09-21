const { response } = require('express');
const http = require('http'); 
const express = require('express'); 
const app = express(); 
const httpServer = require('http').createServer(app); 
var mysql = require('mysql'); 

app.use(express.json());
app.use(express.urlencoded({extended: true})); 

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
  let username = req.body.username; 
  let password = req.body.password; 
  let sql = `INSERT INTO users (username, password) VALUES (?, ?)`
  con.query(sql, [username, password], (err, results) => {
    if (err) throw err; 
  }); 
  let querySql = `SELECT * FROM users WHERE username = ? AND password = ?` 
  con.query(querySql, [username, password], (err, results) => {
    console.log(results); 
  });
  console.log(req.body); 
});

app.get('/validate-login', (req, res) => {
  let sql = `SELECT * FROM users WHERE username = ? AND password = ?`
  // req.query contains the url parameters that are sent from the form being submitted
  con.query(sql, [req.query.username, req.query.password], (err, results) => {
    if (results.length === 0) {
      res.send('<h1> login attempt failed </h1>'); 
    }
    else {
      res.send("<h1> login attempt successful! </h1>"); 
    }
  });
});


// Host: 107.180.1.16
// Port: 3306
// Username: 2021group4
// PW: group4fall2021
// default schema: cis440fall2021group4

httpServer.listen(4545, () => console.log('listening on port 4545')); 
