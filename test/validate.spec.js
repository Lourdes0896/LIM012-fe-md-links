const { optionValidate } = require ('../src/validate');

describe ('Validar los Links', () => {
    const input = "./prueba";
    const output = [
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
    it ('Debe verificar los links y me va a devolver su href, text, file, statusText, status', (done) => {
        optionValidate(input).then((resul) => {
            expect (resul).toEqual(output);
            done();
        })
        .catch((error) => done(error));
    });
});