#! / usr / bin / env node 
const chalk = require ('chalk');
 const cliStatus = require ('../src/cliOptions');
const {mdLinks} = require('./mdLinks.js');

 const route = process.argv[2];
 console.log('process', route);
 const validate = process.argv.indexOf('--validate');
 const stats = process.argv.indexOf('--stats');
 const help = process.argv.indexOf('--help');

 const OptionConsole = `
 -----------------------Valid Arguments--------------------------------
 ${chalk.blueBright('Opcion 1: ')} md-links <path-to-file> (--stas --validate || --validate --stas)
 ${chalk.blueBright('Opcion 2: ')} md-links <path-to-file> --validate
 ${chalk.blueBright('Opcion 3: ')} md-links <path-to-file> --stats
 -----------------------------------------------------------------------
 `;


 const cli = (route) => {
    if(help >= 0 || route === undefined) {
        console.log(OptionConsole);
    }
    if (route) {
        if(stats >= 0 && validate >= 0){
            mdLinks(route, {validate:true})
            .then((links) => console.log(cliStatus.statsandValidate(links)))
            .catch((error) => console.log(error));
        }
        if(validate >= 0){
           mdLinks(route, {validate:true})
           .then((links) => console.log(cliStatus.validate(links)))
           .catch((error) => console.log(error));
       }
       if(stats >= 0){
           mdLinks(route, {validate:false})
           .then((links) => console.log(cliStatus.stats(links)))
           .catch((error) => console.log(error));
       }else{
           mdLinks(route)
           .then((links) => console.log(cliStatus.linkFile(links)))
           .catch((error) => console.log(error));
           
       }
    }
};
cli(route);
//console.log(process.argv);
//console.log('probando cli', cli('./prueba/hola.md'))
//cli('./prueba').then((res) => console.log('este',res));


 console.log(cli('./prueba'))
// console.log(cli)
