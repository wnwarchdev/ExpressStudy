const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');


const app = express();

app.engine('.hbs', hbs());
app.set('view engine', '.hbs');


app.use(express.static(path.join(__dirname, '/public')));

app.use('/user/settings', (req, res, next) => {
  res.send('Go away!');
});

app.use('/user/panel', (req, res, next) => {
  res.send('Go home now!');
});

app.get('/', (req, res) => {
  res.render('index', { layout: false })
});

app.get('/home', (req, res) => {
  res.render('index', { layout: false })
});

app.get('/about', (req, res) => {
  res.render('about', { layout: false })
});

app.get('/hello/:name', (req, res) => {
  res.render('hello', { layout: false, name: req.params.name });
});

app.use((req, res) => {
  res.status(404).render('error', { layout: false });
})

app.get('/style.css', (req, res) => {
  res.sendFile('style.css');
});

app.get('/test.jpg', (req, res) => {
  res.sendFile('test.jpg');
});


app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});