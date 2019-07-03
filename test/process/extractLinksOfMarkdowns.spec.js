

import {linksmd} from '../../src/process/extractLinksOfMarkdowns';

import path from 'path'


describe('linksmd', () => {
  it('Debería ser una funcion', () => {
    expect(typeof (linksmd)).toEqual('function')
  });
  it('Debería recibir un path y retornar una array de objetos', () => {
    expect(linksmd(path.join(process.cwd(), '../../src/process/ruta1.md'))).toEqual([{
      href: 'https://github.com/RocioAl/LIM009-fe-md-links',
      text: 'hola como estas',
      file: path.join(process.cwd(), '../../src/process/ruta1.md')
    },
    {
      href: 'https://drive.google.com/file/d/1TUHy3SxgalOWBqH-rtHKbejsKCXoLxWD/view?usp=sharing',
      text: 'elementos a considerar al escribir tu CV',
      file: path.join(process.cwd(), '../../src/process/ruta1.md')
    },
    {
      href: 'https://flippingbook.com/404',
      text: 'error',
      file: path.join(process.cwd(), '../../src/process/ruta1.md')
    }
    ])
  });
})
