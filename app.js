const express = require('express');
const app = express();
const index = require('./routes/index.js'); //find root routes

const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('assets'));
app.use(express.urlencoded({ extended: true }));

// app.use((req,res,next)=>{
//   console.log('JALAN');
//   next()
// })

app.use('/', index)

app.listen(PORT, () => {
  console.log(`IS GO ${PORT}`);
})