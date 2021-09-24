const { response } = require('express');
const http = require('http'); 
const express = require('express'); 
const app = express(); 
const httpServer = require('http').createServer(app); 
const mysql = require('mysql'); 

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
  // inserting data into the database with create-account
  // post requests have a body that can be accessed through req.body
  let sql = `INSERT INTO users (username, password) VALUES (?, ?)`
  con.query(sql, [req.body.username, req.body.password], (err, results) => {
    if (err) throw err; 
  }); 
  // querying the new information that has been just added and logging it
  // to the console so we can know what we are seeing
  let querySql = `SELECT * FROM users WHERE username = ? AND password = ?` 
  con.query(querySql, [username, password], (err, results) => {
    console.log(results); 
  });
  console.log(req.body); 
});

app.post('/validate-login', (req, res) => {
  // we are going to be sending a json back to the page, so we have to make sure
  // to set the content type so it sends correctly
  res.contentType('application/json'); 
  
  let sql = `SELECT * FROM users WHERE username = ? AND password = ?`
  
  con.query(sql, [req.body.username, req.body.password], (err, results) => {
    if (err !== null || err !== []) {
      console.log(err); 
    }
    try {
      // if there are any results, the user exists in the database, so we reuse
      if (results.length === 0) {
        console.log(results); 
        res.json({loginValid: false}); 
      }
      else {
        res.send({loginValid: true}); 
      }
    } 
    catch {
      console.log('error with /validate-login'); 
    }
  });
});

// Host: 107.180.1.16
// Port: 3306
// Username: 2021group4
// PW: group4fall2021
// default schema: cis440fall2021group4

httpServer.listen(4545, () => console.log('listening on port 4545')); 
