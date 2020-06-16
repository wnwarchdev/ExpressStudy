const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };
  next();
});

app.use(express.static(path.join(__dirname, '/public')));

app.use('/user/settings', (req, res, next) => {
  res.send('Go away!');
});

app.use('/user/panel', (req, res, next) => {
  res.send('Go home!');
});

app.get('/', (req, res) => {
  res.show('index.html');
});

app.get('/home', (req, res) => {
  res.show('index.html');
});

app.get('/about', (req, res) => {
  res.show('about.html');
});

app.use((req, res) => {
  res.status(404).show('error.html');
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