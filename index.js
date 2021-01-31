const http = require('http');
const colors = require('colors');
//Se importa el archivo y todo lo que importe se guarda en una constante

/*fs.writeFile('./texto.txt', 'NODEJS', function(err){
    if (err) {
        console.log(err);
    }
    console.log('Archivo creado');
}); //Este bloque de código es asíncrono, una vez que el SO termina de crear el archivo, pasa a la función de nodeJs (callback) */

/*fs.readFile('./texto.txt', function (err, data) {  
    if(err){
        console.log('Error al leer el archivo');
    }
    console.log(data.toString());
});*/

//Forma ordenada de crear un servidor
const handleserver = function(req, res){ //manejador del servidor
    res.writeHead(200, {'conten-type': 'text/html'});
    res.write('<h1>Bienvenido xd</h1>');
    res.end();
};

const server = http.createServer(handleserver);
server.listen(3000, function(){
    console.log('Server on port 3000'.yellow);
});

/*
//Crear un servidor
http.createServer(function(request, response){
    response.writeHead(200, {'conten-type': 'text/html'}); //Tipo de respuesta, código de estado http. tipo de contenido
    response.write('<h1>Bienvenido bb xd</h1>');
    response.end();
}).listen(3000); //Puerte en el que va a escuchar mi servidor
//puerto: Proceso que el pc toma para poder ejecutar el servidor, mientras realiza otras cosas
*/
console.log('última linea');
