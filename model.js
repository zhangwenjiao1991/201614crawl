let mongoose=require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://127.0.0.1/201614crawl');
var MovieSchema={
    name:String,
    url:String
};
module.exports=mongoose.model('Movie',MovieSchema);
