const chalk = require ('chalk');
const {mdLinks} = require('./mdLinks');
// const { optionValidate } = require('./validate');
const prueba = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: './prueba/hola.md',
    statusText: 'ok',
    status: 200
  },
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
const linkFile = (objLinks) => {
    let basicPropertys = '';
    if( objLinks.length > 0) {
        objLinks.forEach((element => {
        basicPropertys += `
        ${chalk.magenta('Href: ')} ${chalk.yellowBright(element.href)}
        ${chalk.magenta('Text: ')} ${chalk.yellowBright(element.text.substring(0, 50))}
        ${chalk.magenta('File: ')} ${chalk.yellowBright(element.file)} \n `;
        }));
    }
    if( objLinks.length === 0 ){
        return chalk.red ('No se encontraron links')
    }
    return basicPropertys;
}

//mdLinks('C:\\Users\\Lourdes\\Documents\\GitHub\\LIM012-fe-md-links\\prueba\\hola.md').then(linkFile).then(console.log);
//console.log(linkFile(prueba))

const validate = (objLinks) => {
  let printLinks = '';
  if (objLinks.length > 0) {
      objLinks.forEach((element => {
          printLinks += `
          ${chalk.magenta('Href: ')} ${chalk.yellowBright(element.href)}
          ${chalk.magenta('Text: ')} ${chalk.yellowBright(element.text.substring(0, 50))}
          ${chalk.magenta('File: ')} ${chalk.yellowBright(element.file)}
          ${chalk.magenta('Status Text: ')} ${chalk.yellowBright(element.statusText)}
          ${chalk.magenta('Status: ')} ${chalk.yellowBright(element.status)} \n`;
      }));
  } else {
      return chalk.red ('No se encontraron links')
  }
  return printLinks;
}

//mdLinks('C:\\Users\\Lourdes\\Documents\\GitHub\\LIM012-fe-md-links\\prueba\\hola.md', { validate : true}).then(validate).then(console.log);
//console.log(validate(prueba))

const stats = (objLinks) => {
  const linksTotal = objLinks.length;
  const uniqueLinks = new Set(objLinks.map((element) => element.href)).size;
  const linkStats = `
${chalk.magenta('Total:')}${chalk.yellowBright(linksTotal)}
${chalk.magenta('Unique:')}${chalk.yellowBright(uniqueLinks)}`;

  return linkStats;
};

//mdLinks('C:\\Users\\Lourdes\\Documents\\GitHub\\LIM012-fe-md-links\\prueba\\hola.md', { validate : true}).then(stats).then(console.log);
//console.log(stats(prueba))

const statsandValidate = (objLinks) => {
  const linksTotal = objLinks.length;
  const uniqueLinks = new Set(objLinks.map((element) => element.href)).size;
  //console.log(uniqueLinks);
  const brokenLinks = objLinks.filter((element) => element.status === 404).length;
  const statsValidateTotal = `
  ${chalk.magenta('Total: ')} ${chalk.yellowBright(linksTotal)}
  ${chalk.magenta('Unique: ')} ${chalk.yellowBright(uniqueLinks)}
  ${chalk.magenta('Broken: ')} ${chalk.yellowBright(brokenLinks)}`;
return statsValidateTotal;
}

//console.log(statsandValidate(prueba))
//mdLinks('C:\\Users\\Lourdes\\Documents\\GitHub\\LIM012-fe-md-links\\prueba\\hola.md', { validate : true}).then(statsandValidate).then(console.log);

module.exports = {
  linkFile,
  validate,
  stats,
  statsandValidate
}
