//ReadyState = 0
let xhr = new XMLHttpRequest

//ReadyState = 1
xhr.open("GET", "ajax.txt")
//Enviar XHR
xhr.send()

/**EVENTOS DE AJAX
 * readystatechange : cada vez que la propiedad ready state cambia, este se dispara
 * load : se dispara cuando el readyState es igual a 4
 */
function cambioDeEstado (){
   console.log(xhr.readyState)
}
function termino (){
   if (xhr.status == 200){
      console.log(xhr.response)
   }
}

xhr.addEventListener("readystatechange", cambioDeEstado)
xhr.addEventListener("load", termino)


/**ReadyState
 0- Objeto Inicializado
 1- Objeto configurado
 3- Headers enviados y recibidos
 4- Descargando informacion
 4- Pedido finalizado

 HTTP

 REQUEST
 GET index.html (url a donde tiene que pedir algo) HTTP/1.1(version de http)
    headers
    -Host : http://mipagina.com (de aca queres sacar el index.html)
    -User-Agent : (que navegador pide (firefox, explorer, mozilla))

 RESPONSE
 HTTP/1.1 viene con codigo numero 404 que ademas llega con mensaje Not Found.
    Headers de la respuesta
    -Server: apache(nombre de un servidor) 5.5 / win32(todo windos opera con esto).
    -Content-Type : text/plain (MIME-TYPE).
    -Content-Length : el peso del archivo y esta expresado en bytes (11 bytes)


 METODOS/VERBOS HTTP
 GET-POST(crear)-PUT(reemplazar)-PATCH(editar)-DELETE
 
 STATUS
 200-ok
 404-not found
 "buenos"
 1xx
 2xx lo mejor que te puede pasar, ok.
      201 Created (se mando info y se creo)
 3xx
      304 not modified (es la misma informacion que se pidio para el 200)
      son codigos de success
 "malos"
 4xx frecuentemente errores del cliente
      400 bad request
      401 unauthorized no esta autorizado
      403 forbidden esta prohibido
      405 Method not allowed
      408 request timeout
      418 im a teapot
 5xx errores del servidor
      500 internal server error
      
 */