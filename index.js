var express = require('express');

var app = express();
var server = require('http').createServer(app);
var request = require('superagent');
var moment = require('moment');

var token = '';
var searchUrl = 'https://slack.com/api/search.messages';
var weekAgo = moment().subtract(1,'w');
var weekAgoDateString = weekAgo.format('YYYY-MM-DD');


app.get('/zeitgeist', function(req, res, next){
  //res.send('hi there');
  request.get(searchUrl)
    .query({token:token})
    .query({sort:'timestamp'})
    .query({sort_dir:'asc'})
    .query({query: 'after:'+weekAgoDateString}).pipe(res);
    //.query({query:'http://*'}).pipe(res);
    //.end(function(response){
    //  response.pipe(res);
    //});

});

server.listen(3001, function(){
  console.log('server is listening on 3001');
});
