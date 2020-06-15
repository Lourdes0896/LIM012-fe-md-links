const { linkFile, validate, stats, statsandValidate } = require ('../src/cliOptions.js');

describe ('Opciones del cli', () => {
    const input = "./prueba";
   
    const outputValidate =   `
          File:  ./prueba/subPrueba/book1.md
          Href:  https://es.wikipedia.org/wiki/Markdown
          Text:  Markdown
          Status text:  ok
          Status:  200

          File:  ./prueba/subPrueba/book1.md
          Href:  https://nodejs.org/
          Text:  Node.js
          Status text:  ok
          Status:  200 `;   
    const outputStats = `Total:  2
                        Unique:  2 `;

    const outputStatsandValidate = ` Total:  2
                                     Unique:  2
                                     Broken:  0`;  
    const outputLinkFile = `
    File:  ./prueba/subPrueba/book1.md
    Href:  https://es.wikipedia.org/wiki/Markdown
    Text:  Markdown

    File:  ./prueba/subPrueba/book1.md
    Href:  https://nodejs.org/
    Text:  Node.js

    `;
    
    it (' Debe imprimir las 5 propiedades: File, href, text, statustext, Status cuando elija la opcion -- Validate', (done) => {
        validate(input).then((result) => {
            expect (result).toBe(outputValidate);
            done();
        })
        .catch((error) => done(error));
    });

    


})