const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 8000


const connection = mysql.createConnection({  
    host: '127.0.0.1',  
    port: '3306',
    user: 'root',
    password: 'artsavinci',
    database: 'test'
});

connection.connect();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.html')
})

// app.get('/list', (req, res) => {
//     res.render('list.html')
// })


app.get('/list', (req, res) => {
    connection.query('SELECT * from User', (error, rows, fields) => {
        if (error) throw error;
        res.render('list',{'data':rows})
      });

    //   res.render('list')
    // res.sendFile(__dirname + 'index.html')
})

app.listen(port, () => {
    console.log(`server starting... port:${port}`)
} )