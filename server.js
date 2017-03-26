let express=require('express');
var Movie=require('./model');
var path=require('path');
let app=express();
//把node_modules目录作为静态文件根目录
app.use(express.static(path.join(__dirname,'node_modules')));
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);
app.get('/',function(req,res){
    Movie.find({},function(err,movies){
        res.render('movie',{movies});
    })
});
app.listen(8080);
