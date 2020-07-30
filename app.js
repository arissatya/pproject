const express = require('express');
const app = express();
const index = require('./routes/index.js'); //find root routes
const session =require('express-session')

const PORT = 3000;
app.use(session({
  secret: "megalovania",
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 20000 }
}))
app.set('view engine', 'ejs');
app.use(express.static('assets'));
app.use(express.urlencoded({ extended: true }));

app.use('/', index)

app.listen(PORT, () => {
  console.log(`IS GO ${PORT}`);
})