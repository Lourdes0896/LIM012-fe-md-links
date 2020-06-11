const { mdLinks } = require ('../src/mdLinks.js');

describe ('Opcion de Validar los links', () => {
    const input = "./prueba";
    const outputValidate =  [
      {
        href: 'https://nodejs.org/en/',
        text: 'Node.js',
        file: 'prueba\\hola.md',       
        statusText: 'ok',
        status: 200
      },
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'prueba\\subPrueba\\book1.md',
        statusText: 'ok',
        status: 200
      },
      {
        href: 'https://nodejs.org/',
        text: 'Node.js',
        file: 'prueba\\subPrueba\\book1.md',
        statusText: 'ok',
        status: 200
      }
    ];
    const output = [
      {
        href: 'https://nodejs.org/en/',
        text: 'Node.js',
        file: 'prueba\\hola.md'
      },
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'prueba\\subPrueba\\book1.md'
      },
      {
        href: 'https://nodejs.org/',
        text: 'Node.js',
        file: 'prueba\\subPrueba\\book1.md'
      }
      ];

      it ('Si la option es TRUE debe verificar los links y me va a devolver su href, text, file, statusText, status', (done) => {
          mdLinks (input, {validate:true})
          .then((result) => {
              expect (result). toEqual (outputValidate);
              done();
          })
          .catch((error) => done(error));
          
      });

      it ('Si la option es FALSE debe devolver su href, text, file', (done) => {
        mdLinks (input, {validate:false}).then((result) => {
            expect (result). toEqual (output);
            done();
        })
        .catch((error) => done(error));
    });
    it ('Si solo tiene un parametro debe devolver su href, text, file', (done) => {
        mdLinks (input).then((result) => {
            expect (result). toEqual (output);
            done();
        })
        .catch((error) => done(error));
    });
})