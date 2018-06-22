// requre express module
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//we'll need this bodypusrer to fatch the data
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//for ejs and its gonna diractly look into view engine/folder as defult behavior
app.set('view engine', 'ejs')

//middlewere to use css in our pages
app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.use('/js', express.static('js'));

//added for databse
// const { Pool, Client } = require('pg')
app.use(express.static('public'));

// Add the database info here



// sending ejs pages to server so we can access them
app.get('/', function(req, res){
	res.render('index');
});

app.get('/anExample', function(req, res){
	res.render('anExample');
});

app.get('/dataProcessing', function(req, res){
	res.render('dataProcessing');
});

app.get('/typesOfData', function(req, res){
	res.render('typesOfData');
});

app.get('/SubwayData', function(req, res){
	res.render('SubwayData');
});

app.get('/population', function(req, res){
	res.render('population');
});

app.get('/contact', function(req, res){
	res.render('contact');
});

app.get('/about', function(req, res){
	res.render('about');
});

app.get('/references', function(req, res){
	res.render('references');
});
// you will need this to get data from contact form
// app.post('/contact', function(req, res){
// 	res.render('contact');
// });

app.listen(3000, function(){
    console.log("info",'Server is running at port : ' + 3000);
});