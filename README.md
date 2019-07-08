# Markdown Links

# Instalación
En el caso de que desees clonar este repositorio, simplemente deberás escribir en tu consola :
$ npm install

En el caso de querer instalarlo en tu proyecto deberás escribir la siguiente línea de comando :
npm install --save https://github.com/RocioAl/LIM009-fe-md-links 

Esto hará que se instalen las dependencias, para que el módulo funcione correctamente. Este módulo tiene una función principal llamada mdlinks, que tiene dos parametros :

`path`: Ruta absoluta o relativa al archivo o directorio
`options`: Un objeto con las siguientes propiedades:(validate, stats)

`--validate o --v`

Si pasamos la opción --validate o --v, el módulo debe hacer una petición HTTP para averiguar si el link funciona o no. Si el link resulta en una redirección a una URL que responde OK, entonces consideraremos el link como OK.
El output en este caso incluye la palabra OK o NOT FOUND después de la URL, así como también devolverá la validacion o status de los links (status: 200, 404) de la respuesta recibida a la petición HTTP a dicha URL.


`--stats o --s`

Si pasamos la opción --stats o --s el output (salida) devolverá la cantidad de links que se encuentran en buen estado y cuantos están rotos, además del total de links encontrados en el archivo.md(string con estadísticas básicas sobre los links)

## Uso en la línea de comandos

Podrá ejecutarse de la siguiente manera a través de la terminal:

node lib/process/cli.js <path-to-file> [options]

Por ejemplo:
* $ lib/process/cli.js ./some/example.md
Resultado:
el nombre del link, y la URL de este link.

* $ lib/process/cli.js./some/example.md --validate
Resultado:
Lo anterior incluyendo el status de los links

* $ lib/process/cli.js ./some/example.md --stats
Resultado:
cantidad de links, rotos y buenos


![mdlinks](https://user-images.githubusercontent.com/47761211/60787605-f64fe500-a11f-11e9-8f9c-5d2d4c18a284.gif)



#### Implemetación de la librería

* Se crea el flujograma para tener una guía de la implementación del    proyecto 
* Adicionalmente se crea el pseudocodigo para crear las funciones y saber su input, output y los posibles métodos a implementar-.


### Tutoriales / NodeSchool workshoppers

- [learnyounode](https://github.com/workshopper/learnyounode)
- [how-to-npm](https://github.com/workshopper/how-to-npm)
- [promise-it-wont-hurt](https://github.com/stevekane/promise-it-wont-hurt)

### Otros recursos

- [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
- [Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)
- [Node.js http.get - Documentación oficial](https://nodejs.org/api/http.html#http_http_get_options_callback)
- [Node.js - Wikipedia](https://es.wikipedia.org/wiki/Node.js)
- [What exactly is Node.js? - freeCodeCamp](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
- [¿Qué es Node.js y para qué sirve? - drauta.com](https://www.drauta.com/que-es-nodejs-y-para-que-sirve)
- [¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube](https://www.youtube.com/watch?v=WgSc1nv_4Gw)
- [¿Simplemente qué es Node.js? - IBM Developer Works, 2011](https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html)
- [Node.js y npm](https://www.genbeta.com/desarrollo/node-js-y-npm)
- [Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?](http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175)
- [Asíncronía en js](https://carlosazaustre.com/manejando-la-asincronia-en-javascript/)
- [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
- [Publicar packpage](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [Crear módulos en Node.js](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [Leer un archivo](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
- [Leer un directorio](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
- [Path](https://nodejs.org/api/path.html)
- [Linea de comando CLI](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)
- [Promise](https://javascript.info/promise-basics)
- [Comprendiendo Promesas en Js](https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1)


