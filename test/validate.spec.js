const { optionValidate } = require ('../src/validate');

describe ('Validar los Links', () => {
    const input = "./src/prueba.md";
    const output = [
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
    it ('Debe verificar los links y me va a devolver su href, text, file, statusText, status', (done) => {
        optionValidate(input).then((resul) => {
            expect (resul).toEqual(output);
            done();
        })
        .catch((error) => done(error));
    });
});