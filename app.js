var express = require('express');
var app = express();

var server;

var port = 3000 || process.env.PORT


app.disable('x-powered-by');
app.set('view engine' , 'jade');


process.env.NODE_ENV = 'production';





var store = {
	home:{
		page:"Home page",
		content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque neque tortor, venenatis id mi sed, tempus cursus leo. "
	},
	about:{
		page:"About page",
		content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque neque tortor, venenatis id mi sed, tempus cursus leo. "
	},
	downloads:{
		page:"Downloads page",
		content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque neque tortor, venenatis id mi sed, tempus cursus leo. "
	},
	profile:{
		page:"Profile page",
		content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque neque tortor, venenatis id mi sed, tempus cursus leo. "
	}
}






// app.use(function(req, res, next){

// 	console.log('%s %s' , req.method, req.url);
// 	//next();

// })


//app.use(express.static(__dirname + '/public'));



app.get('/:page?' , function(req,res){

	//console.log(req.params);

	var page = req.params.page;
	var data;

	if(!page) page = 'home';

	data = store[page];

	if(!data){
		res.redirect('/');
		return;
	}

	data.links = Object.keys(store);

	res.render('main' , data);

	//console.log(data);

	// res.send('\
	// 	<h1>' + data.page + '</h1>\
	// 	This is <mark>' + data.content + '</mark>\
	// 	');

});


server = app.listen(port , function(){
	console.log('listening on port: ' + port);
})