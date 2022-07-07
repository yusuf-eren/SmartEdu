const express = require('express');
const app = express();
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');
const userRoute = require('./routes/userRoute');
// Connect DB
mongoose
  .connect(
    'mongodb+srv://yusuf:allah1@etsyfetch.vaunvnx.mongodb.net/smartedu-db?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('Connected To Database');
  })
  .catch((err) => {
    console.log(err);
  });

app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Routes
app.use('/', pageRoute);
app.use('/about', pageRoute);
app.use('/courses', courseRoute);

app.use('/category', categoryRoute);

app.use('/users', userRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
