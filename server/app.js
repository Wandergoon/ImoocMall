var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//用ejs,得安装
var ejs = require('ejs')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.engine(".html", ejs.__express) //设置HTML引擎
app.set('view engine', 'html'); //设置引擎

app.use(logger('dev')); //安装第三方插件
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //设置当前目录

app.use('/', indexRouter); //访问/时,加载indexRouter
app.use('/users', usersRouter);

// catch 404 and forward to error handler
//全局对404的拦截
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;