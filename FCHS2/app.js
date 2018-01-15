// Express
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const path = require('path')
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const port = "8000"

app.use(express.static(path.join(__dirname+ '/public')));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.listen(port, () => {
    console.log('Server Started')
})

app.get('/', (req, res) =>{
  res.render('home');
})

app.get('/home.handlebars', (req, res) =>{
  res.render('home');
})

app.get('/quick_links.handlebars', (req, res) =>{
  res.render('quick_links');
})

app.get('/academics.handlebars', (req, res) =>{
  res.render('academics');
})

app.get('/ptca.handlebars', (req, res) =>{
  res.render('ptca');
})

app.get('/our_school.handlebars', (req, res) =>{
  res.render('our_school');
})

app.get('/grad_reqs.handlebars', (req, res) =>{
  res.render('grad_reqs');
})

app.get('/contact.handlebars', (req, res) =>{
  res.render('contact');
})

app.get('/careers.handlebars', (req, res) =>{
  res.render('careers');
})

app.get('/login.handlebars', (req, res) =>{
  res.render('login');
})

app.get('/toty.handlebars', (req, res) =>{
  res.render('toty');
})

app.get('/staff.handlebars', (req, res) =>{
  res.render('staff');
})

app.get('/childfind.handlebars', (req, res) =>{
  res.render('childfind');
})

app.get('/board.handlebars', (req, res) =>{
  res.render('board');
})

app.get('/bell_schedule.handlebars', (req, res) =>{
  res.render('bell_schedule');
})

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });