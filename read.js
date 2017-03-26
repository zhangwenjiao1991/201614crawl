/**
 *
 * @param url   http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1
 * @param callback
 */
var request=require('request');
var iconv=require('iconv-lite');
var cheerio=require('cheerio');
//写日志
var debug=require('debug');
var logger=debug('crawl:read');
module.exports=function(url,callback){
    request({url,encoding:null},function(err,response,body){
        body=iconv.decode(body,'gbk');
        var movies=[];
        //把响应体字符串转换成类似jquery对象
        var $=cheerio.load(body);
        //
        $('.keyword .list-title').each(function(){
            var $this=$(this);
            var movie={
                name:$this.text(),//名称
                url:$this.attr('href')//url地址
            };
            logger(`读取到电影:${movie.name}`)
            movies.push(movie);
        });
        callback(err,movies)
    })
};

/*var url='http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
module.exports(url,function(err,movies){
    console.log(movies)
})*/
