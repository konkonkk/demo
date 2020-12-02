var express = require('express')
var app = express()
// 设置视图引擎
var handlebars = require('express3-handlebars').create({defaultLayout: 'main'})
app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')
app.set('port', process.env.PORT || 3000)

var arr = ['1', '2', '45', '89', '21']

// 静态资源
app.use(express.static(__dirname + '/public'))
// 主页路由
app.get('/', function(req, res){
  res.render('home')
})
// about路由res.render('')
app.get('/about', function(req, res){
  var number = arr[Math.floor(Math.random() * arr.length)]
  res.render('about', {n: number})
})
// 定制404
app.use(function(req, res){
  res.status(404)
  res.render('404')
})
// 定制500
app.use(function(req, res){
  console.error(err.stack)
  res.type('text/plain')
  res.status(500)
  res.render('500')
})

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port'))
})