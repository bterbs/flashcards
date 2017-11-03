const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index')
});

app.get('/about', (req, res) => {
  res.send('<h1>...and this is the about page!</h1>')
});

// this lets us know in the terminal that the server is running/ when it restarts
// make sure nodemon is installed globally to automatically restart server when there
// are changes made to the app. also that "main" in pkg.json points to entry point.
app.listen(3000, () => {console.log('The server is running on localhost:3000, Brittany')});
