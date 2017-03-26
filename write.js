/**
 * 把得到的电影数组存入到数据库中
 */
let Movie=require('./model');
let async=require('async');
var debug=require('debug');
var logger=debug('crawl:write');
module.exports=function(movies,callback){
    async.forEach(movies,function(movie,cb){
        Movie.create(movie,cb)
        logger(`写入电影:${movie.name}`);
    },callback)
}
