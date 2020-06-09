const { mdLinks } = require ('../src/mdLinks.js');

describe ('Opcion de Validar los links', () => {
    const input = "./src/prueba.md";
    const outputValidate =  [
        {
            href: 'https://es.wikipedia.org/wiki/Markdown',
            text: 'Markdown',
            file: './src/prueba.md',
            statusText: 'ok',
            status: 200
          },
          {
            href: 'https://nodejs.org/',
            text: 'Node.js',
            file: './src/prueba.md',
            statusText: 'ok',
            status: 200
          }
    ];
    const output = [
        {
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown',
          file: './src/prueba.md'
        },
        {
          href: 'https://nodejs.org/',
          text: 'Node.js',
          file: './src/prueba.md'
        }
      ];

      it ('Si la option es TRUE debe verificar los links y me va a devolver su href, text, file, statusText, status', (done) => {
          mdLinks (input, {validate:true}).then((resul) => {
              expect (result). toEqual (outputValidate);
          });
          done();
      });

      it ('Si la option es FALSE debe devolver su href, text, file', (done) => {
        mdLinks (input, {validate:false}).then((resul) => {
            expect (result). toEqual (output);
        });
        done();
    });
    it ('Si solo tiene un parametro debe devolver su href, text, file', (done) => {
        mdLinks (input).then((resul) => {
            expect (result). toEqual (output);
        });
        done();
    });
})