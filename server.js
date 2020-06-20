const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');


const app = express();

app.engine('hbs', hbs({ extname: 'hbs', layoutsDir: './layouts', defaultLayout: 'main' }));
app.set('view engine', '.hbs');


app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/user/settings', (req, res, next) => {
  res.send('Go away!');
});

app.use('/user/panel', (req, res, next) => {
  res.send('Go home now!'); 
});

app.get('/', (req, res) => {
  res.render('index',)
});

app.get('/home', (req, res) => {
  res.render('index', )
});

app.get('/contact', (req, res) => {
  res.render('contact', )
});

app.get('/about', (req, res) => {
  res.render('about', { layout: 'dark' });
});

app.get('/hello/:name', (req, res) => {
  res.render('hello', { name: req.params.name });
});


app.post('/contact/send-message', (req, res) => {

  const { author, sender, title, message } = req.body;

  if(author && sender && title && message) {
    res.render('contact', { isSent: true });
  }
  else {
    res.render('contact', { isError: true });
  }

});





app.use((req, res) => {
  res.status(404).render('error');
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