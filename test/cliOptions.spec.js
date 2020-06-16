const { linkFile, validate, stats, statsandValidate } = require ('../src/cliOptions.js');

// describe ('Opciones del cli', () => {
    const input = [
        {
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown',
          file: './prueba/subPrueba/book1.md',
          statusText: 'ok',
          status: 200
        },
        {
          href: 'https://nodejs.org/',
          text: 'Node.js',
          file: './prueba/subPrueba/book1.md',
          statusText: 'ok',
          status: 200
        }
      ]; 
    const outputValidate =
    `
          File: ./prueba/subPrueba/book1.md
          Href: https://es.wikipedia.org/wiki/Markdown
          Text: Markdown
          Status text: ok
          Status: 200

          File:  ./prueba/subPrueba/book1.md
          Href:  https://nodejs.org/
          Text:  Node.js
          Status text: ok
          Status:  200`;   

    const outputStats = `
  Total:2
  Total:  2`;

    const outputStatsandValidate = `
  Total: 2
  Unique:  2
  Broken:  0`;  
    const outputLinkFile = `
    File:  ./prueba/subPrueba/book1.md
    Href:  https://es.wikipedia.org/wiki/Markdown
    Text:  Markdown

    File:  ./prueba/subPrueba/book1.md
    Href:  https://nodejs.org/
    Text:  Node.js`;
    
//     it (' Debe devolver las 5 propiedades: File, href, text, statustext, Status cuando elija la opcion -- Validate',() => {
//             expect (validate(input)).toEqual(outputValidate);
//         })

//     it (' Debe devolver las propiedades: Total y Unique cuando elija la opcion -- Stats',() => {
//             expect (validate(input)).toEqual(outputStats);
//         })

//     it (' Debe devolver las propiedades: Total, Unique y broken cuando elija la opcion -- Stats',() => {
//             expect (validate(input)).toEqual(outputStatsandValidate);
//         })     
//     it (' Debe devolver las 5 propiedades: File, href, text cuando no elija ninguna opcion',() => {
//             expect (validate(input)).toEqual(outputLinkFile);
//         }) 
      
//     });


describe('Opcion Validate', () => {
  it('Es una funcion', () => {
      expect (typeof validate).toBe('function');
  });
  it('Debe devolver las 5 propiedades: File, href, text, statustext, Status cuando elija la opcion --validate', () => {
    expect(validate(input)).toEqual(outputValidate);
});
});

describe('Opcion Stats', () => {
  it('Es una funcion', () => {
      expect (typeof validate).toBe('function');
  });
  it('Debe devolver las propiedades: Total y Unique cuando elija la opcion --stats', () => {
    expect(stats(input)).toEqual(outputStats);
});
});

describe('Opcion (--stas --validate || --validate --stas)', () => {
  it('Es una funcion', () => {
      expect (typeof validate).toBe('function');
  });
  it('Debe devolver las propiedades: Total, Unique y broken cuando elija la opcion (--stas --validate || --validate --stas)', () => {
    expect(statsandValidate(input)).toEqual(outputStatsandValidate);
});
});

describe('Opcion imprimir links', () => {
  it('Es una funcion', () => {
      expect (typeof validate).toBe('function');
  });
  it('Debe devolver las 3 propiedades: File, href, text', () => {
    expect(linkFile(input)).toEqual(outputLinkFile);
});
});
