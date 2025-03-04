// 引入各种模块的依赖
var createError = require('http-errors'); // http 服务器
var express = require('express'); //express 框架
var path = require('path'); //本地的一个路径的管理
var cookieParser = require('cookie-parser'); //会话管理模块
var logger = require('morgan'); //日志处理的模块



// 引入路由模块
var indexRouter = require('./routes/index'); //默认的就是首页的路由模块
var usersRouter = require('./routes/users');  // 默认的是用户的一个路由模块

//创建服务端应用对象app
var app = express();

// view engine setup 设置视图的引擎一般开发接口的过程中不用
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * 
 * 操作第三方的模块
 * 启用开发日志记录
 */
app.use(logger('dev'));
// 启动post 接收参数
app.use(express.json()); // json参数
app.use(express.urlencoded({ extended: false }));
//启动会话管理
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
/* 导出模块 */
module.exports = app;
