// paso1
// const [,,...args] = process.argv;
// console.log(args) //[]

// paso2
// const [,,...args] = process.argv;
// console.log(`hola ${args}`) //hola

// paso 3
// process.argv es un arreglo que contiene los argumentos de linea de comando.
// El primer elemento (process.argv[0]) contiene la ruta al ejecutable de node, el segundo elemento contiene el nombre del archivo javascript en ejecución, en este caso pepe.js. Los siguientes argumentos tienen los valores pasados por linea de comandos. En este caso process.argv[2] === "hola".
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });// cmd: node cli.js uno dos=tres cuatro

// paso 4










