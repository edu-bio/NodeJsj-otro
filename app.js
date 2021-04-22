
var express 	= require("express"); 
var app 	= express();
var bodyParser 	= require('body-parser');
var request 	= require("request");

// URL con contenido JSON
var url = "http://localhost:3001/libros/"

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
 
//GET http://localhost:3002/books
// Consumimos datos de la URL
app.get('/books', function(req, res) {
	request({
	    url: url,
	    json: false
	}, function (error, response, body) {

	    if (!error && response.statusCode === 200) {
	    	// Pintamos la respuesta JSON en navegador.    
 			res.setHeader("Content-Type", "application/json");

	        res.send(body) 
	    }
	})
});
 
//GET http://localhost:3002/books/3
app.get('/books/:id', function(req, res) {

	var libroId = req.params.id;

	request({
	    url: url+libroId,
	    json: false
	}, function (error, response, body) {

	    if (!error && response.statusCode === 200) {
	    	// Pintamos la respuesta JSON en navegador.
	        res.send(body) 
	    }
	})
})

//Create http://localhost:3002/books/
app.get('/books', function(req, res) {

    var libro = req.params;

	request({
	    url: url,
	    json: false
	}, function (error, response) {

	    if (!error && response.statusCode === 200) {
	    	// Pintamos la respuesta JSON en navegador.
	        res.send('libro creado con éxito') 
	    }
	})
})
  
var server = app.listen(puerto = 3002, function () {
    console.log(`Servidor en puerto ${puerto}..`); 
});