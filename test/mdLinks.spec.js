const { mdLinks } = require ('../src/mdLinks.js');

describe ('Opcion de Validar los links', () => {
    const input = "./prueba/hola.md";
    const outputValidate =  [
      {
        href: 'https://nodejs.org/en/',
        text: 'Node.js',
        file: './prueba/hola.md',
        statusText: 'ok',
        status: 200
      },
      {
        href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452esssss',
        text: 'mediumError',
        file: './prueba/hola.md',
        statusText: 'fail',
        status: 404
      }
    ];
    const output = [
      {
        href: 'https://nodejs.org/en/',
        text: 'Node.js',
        file: './prueba/hola.md'
      },
      {
        href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452esssss',
        text: 'mediumError',
        file: './prueba/hola.md'
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