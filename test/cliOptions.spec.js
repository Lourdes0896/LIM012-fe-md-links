const { linkFile, validate, stats, statsandValidate } = require ('../src/cliOptions.js');
const data = require ('./dataTest.js')


 describe ('Opciones del cli', () => {

  it('Es una funcion', () => {
      expect (typeof validate).toBe('function');
  });

  it('Es una funcion ', () => {
      expect (typeof stats).toBe('function');
  });

  it('Es una funcion  ', () => {
      expect (typeof statsandValidate).toBe('function');
  });

  it('Es una funcion   ', () => {
      expect (typeof linkFile).toBe('function');
  });

 });



















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

