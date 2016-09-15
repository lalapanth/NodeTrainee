var querystring = require("querystring");

function iniciar(response, postData) {
  console.log("Manipulador de peticiones 'iniciar' fue llamado.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
    '</head>'+
    
    '<body>'+
    '<header role="banner">'+
         
         '<form action="/register" method="post">'+
   
   '<p>'+
  
      '<label for="firstname">first name: </label>'+
      '<input type="text" id="firstname"><br />'+
    
      '<label for="lastname">last name: </label>'+
      '<input type="text" id="lastname"><br />'+
    
      '<label for="email">email: </label>'+
      '<input type="text" id="email"><br>'+
    
      '<input type="radio" name="sex" value="male"> Male<br>'+
      '<input type="radio" name="sex" value="female"> Female<br>'+

      '<input type="submit" value="register">'+
      
   '</p>'+
   
'</form>'+
      '</header>'+
    
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function subir(response, dataPosteada) {
  console.log("Manipulador de Peticion 'subir' fue llamado.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Tu enviaste el texto: : " + querystring.parse(dataPosteada)["radio"]);
  response.end();
}

function register(response, dataPosteada) {
  console.log("Manipulador de Peticion 'subir' fue llamado.");
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
    '</head>'+
    
    '<body>'+
    '<h1>Registro exitoso</h1>'+
    '<h2>'+dataPosteada+'</h2>'+
    '</body>'+
    '</html>';
  response.writeHead(200,{"Content-Type": "text/html"});
  response.write(body);
  response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;
exports.register = register;