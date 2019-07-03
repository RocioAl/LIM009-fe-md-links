

import {validateLinks} from '../../src/process/validate.js';

import fetchMock from '../../node_modules/fetch-mock';



fetchMock.config.sendAsJson = false;

describe('validateLinks', () => {
  fetchMock
    .mock('https://es.wikipedia.org/wiki/Markdown', 200)
    .mock('http://algo.com/2/3/', 404)
    // .mock('//otra-cosa.net/algun-doc.html ','CERTIFICADO EXPIRADO' )
   
  it('deberia validar test', () => {
    const ouput = [ 

      {   href: 'https://es.wikipedia.org/wiki/Markdown',
      status: 200,
          statusText: 'OK'
      
       },
      { href:'http://algo.com/2/3/',
      status: 404,
      statusText: 'NOT FOUND'
      
        },
      // { href:'//otra-cosa.net/algun-doc.html ',
      
      //  },
      
       ];
    
 
    
    validateLinks(ouput)

      .then(response => {
        expect(response).toEqual([{
          href: 'https://es.wikipedia.org/wiki/Markdown',
          status: 200,
          statusText: 'OK'
        },
        {
          href: 'http://algo.com/2/3/',
          status: 404,
          statusText: 'NOT FOUND'
        },
     
      
      ]);
   
      })
     
  })

})





