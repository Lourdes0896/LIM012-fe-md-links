#! / usr / bin / env node 
const chalk = require ('chalk');
 const cliStatus = require ('../src/cliOptions');
const {mdLinks} = require('./mdLinks.js');
const validate = require('./validate');

 const route = process.argv[2];
 console.log('process', route);
 const validateOpt = process.argv.indexOf('--validate');
 const statsOpt = process.argv.indexOf('--stats');
 const statsandValidateOpt = process.argv.indexOf('--stas --validate');
 const help = process.argv.indexOf('--help')

 const OptionConsole = `
 -----------------------Valid Arguments--------------------------------
 ${chalk.blueBright('Opcion 1: ')} md-links <path-to-file> (--stas --validate || --validate --stas)
 ${chalk.blueBright('Opcion 2: ')} md-links <path-to-file> --validate
 ${chalk.blueBright('Opcion 3: ')} md-links <path-to-file> --stats
 -----------------------------------------------------------------------
 `;


 const cli = (route, validate, stats, help) => {
    if(help >= 0 || route === undefined) {
        console.log(OptionConsole);
    }
    if (route) {
        if(stats >= 0 && validate >= 0){
            return mdLinks(route, {validate:true})
            .then((links) => console.log(cliStatus.statsandValidate(links)))
            .catch((error) => console.log(error)); 
        }
        if(validate >= 0){
           return mdLinks(route, {validate:true})
           .then((links) => console.log(cliStatus.validate(links)))
           .catch((error) => console.log(error));
       }
       if(stats >= 0){
          return mdLinks(route, {validate:false})
           .then((links) => console.log(cliStatus.stats(links)))
           .catch((error) => console.log(error));
       }else{
           return mdLinks(route)
           .then((links) => console.log(cliStatus.linkFile(links)))
           .catch((error) => console.log(error));
           
       }
    }
};
cli(route, validateOpt, statsOpt, statsandValidateOpt);
//console.log(process.argv);
//console.log('probando cli', cli('./prueba'))
//cli('./prueba').then((res) => console.log('este',res));


// console.log(cli('./prueba'))


//mdLinks('C:\\Users\\Lourdes\\Documents\\GitHub\\LIM012-fe-md-links\\prueba\\subPrueba\\book1.md',{validate:false} ).then(stats).then(console.log);