
import {  processConvertToAbsolute} from '../../src/process/convertToAbsolute.js';
import path from 'path'
 import {arrayMarckdowns} from '../../src/process/arrayOfMarkdowns.js';


describe('processConvertToAbsolute', () => {
  it('Debería ser una funcion', () => {
    expect(typeof (processConvertToAbsolute)).toEqual('function')
  });
  it('Debería recibir un path absoluto y retornar un booleano', () => {
    expect(processConvertToAbsolute('README.md')).toBe(path.join(process.cwd(), '/README.md'))
  });
  it('Debería recibir un string y retornar un booleano', () => {
    const rutaAbs = path.join(process.cwd(), '/README.md');
    expect(processConvertToAbsolute(rutaAbs)).toBe(rutaAbs)
  });
})

describe('arrayMarckdowns', () => {
  it('Debería ser una funcion', () => {
    expect(typeof (arrayMarckdowns)).toEqual('function')
  });
  it('Debería recibir un path y retornar una array', () => {
    expect(arrayMarckdowns(path.join(process.cwd(), '../../src/process/ruta1.md'))).toEqual([{
      href: 'https://code-maven.com/reading-a-file-with-nodejs',
      text: 'hello estas',
      file: path.join(process.cwd(), '../../src/process/ruta1.md')
    },
    {
      href: 'https://github.com/RocioAl/LIM009-fe-md-links',
      text: 'curriculum',
      file: path.join(process.cwd(), '../../src/process/ruta1.md')
    }
    ])
  });
  it('Debería recibir un path y retornar una array', () => {
    expect(arrayMarckdowns(path.join(process.cwd(), '/ejemplo'))).toEqual([
      {
        href: 'https://code-maven.com/reading-a-file-with-nodejs',
        text: 'hello estas',
        file: path.join(process.cwd(), '../../src/process/ruta1.md')
      },
      {
        href: 'https://github.com/RocioAl/LIM009-fe-md-links',
        text: 'curriculum',
        file: path.join(process.cwd(), '../../src/process/ruta1.md')
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce',
        text: 'rocio',
        file: path.join(process.cwd(), '../../src/process/ruta1.md')
      },
      {
        href: 'https://es.wiktionary.org/wiki/hi',
        text: 'apellido',
        file: path.join(process.cwd(), '../../src/process/ruta1.md')
      },
      {
        href: 'https://github.com/RocioAl/LIM009-fe-md-links',
        text: 'hola como estas',
        file: path.join(process.cwd(), '../../src/process/ruta1.md')
      },
      {
        href: 'https://drive.google.com/file/d/1TUHy3SxgalOWBqH-rtHKbejsKCXoLxWD/view?usp=sharing',
        text: 'elementos a considerar al escribir tu CV',
        file: path.join(process.cwd(),'../../src/process/ruta1.md')
      },
      {
        href: 'http://algo.com/2/3 /404',
        text: 'error',
        file: path.join(process.cwd(), '../../src/process/ruta1.md')
      }
    ])
  });
})