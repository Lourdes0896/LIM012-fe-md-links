const chalk = require ('chalk');
const prueba = [
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
const linkFile = (objLinks) => {
    let basicPropertys = '';
    if( objLinks.length > 0) {
        objLinks.forEach((element => {
        basicPropertys += `
        ${chalk.blueBright('File: ')} ${chalk.yellowBright(element.file)}
        ${chalk.blueBright('Href: ')} ${chalk.yellowBright(element.href)}
        ${chalk.blueBright('Text: ')} ${chalk.yellowBright(element.text.substring(0, 50))} \n `;


        }));
    }
    if( objLinks.length === 0 ){
        return chalk.yellowBright ('No se encontraron links')
    }
    return basicPropertys;
}

//console.log(linkFile('C:\Users\Lourdes\Documents\GitHub\LIM012-fe-md-links\prueba\subPrueba\book1.md'));
//console.log(linkFile(prueba))

const validate = (objLinks) => {
  let printLinks = '';
  if (objLinks.length > 0) {
      objLinks.forEach((element => {
          printLinks += `
          ${chalk.blueBright('File: ')} ${chalk.yellowBright(element.file)}
          ${chalk.blueBright('Href: ')} ${chalk.yellowBright(element.href)}
          ${chalk.blueBright('Text: ')} ${chalk.yellowBright(element.text.substring(0, 50))}
          ${chalk.blueBright('Status text: ')} ${chalk.yellowBright(element.statusText)}
          ${chalk.blueBright('Status: ')} ${chalk.yellowBright(element.status)} \n`;
      }));
  } else {
      return chalk.yellowBright ('No se encontraron links')
  }
  return printLinks;
}

//console.log(validate(prueba))

const stats = (objLinks) => {
  const linksTotal = objLinks.length;
  const uniqueLinks = new Set(objLinks.map((element) => element.href)).size;
  const linkStats = `
  ${chalk.blueBright('Total: ')} ${chalk.yellowBright(linksTotal)}
  ${chalk.blueBright('Unique: ')} ${chalk.yellowBright(uniqueLinks)}`;

  return linkStats;
};

//console.log(stats(prueba))

const statsandValidate = (objLinks) => {
  const linksTotal = objLinks.length;
  const uniqueLinks = new Set(objLinks.map((element) => element.href)).size;
  //console.log(uniqueLinks);
  const brokenLinks = objLinks.filter((element) => element.status === 404).length;
  const statsValidateTotal = `
  ${chalk.blueBright('Total: ')} ${chalk.yellowBright(linksTotal)}
  ${chalk.blueBright('Unique: ')} ${chalk.yellowBright(uniqueLinks)}
  ${chalk.blueBright('Broken: ')} ${chalk.yellowBright(brokenLinks)}`;
return statsValidateTotal;
}

//console.log(statsandValidate(prueba))


module.exports = {
  linkFile,
  validate,
  stats,
  statsandValidate
}
