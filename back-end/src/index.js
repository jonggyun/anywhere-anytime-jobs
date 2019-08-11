const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');

require('dotenv').config();

const app = express();

app.set('port', process.env.PORT || 8000);
app.use(morgan('dev'));
app.use(express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser(process.env.COOKIE_SECRET));

app.use('/', indexRouter);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
