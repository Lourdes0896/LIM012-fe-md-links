const chalk = require ('chalk');
const prueba = [
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
const linkFile = (objLinks) => {
    let basicPropertys = '';
    if( objLinks.length > 0) {
        objLinks.forEach((element => {
        basicPropertys += `
        ${chalk.blueBright('Path: ')} ${chalk.yellowBright(element.file)}
        ${chalk.blueBright('Link: ')} ${chalk.yellowBright(element.href)}
        ${chalk.blueBright('Text: ')} ${chalk.yellowBright(element.text.substring(0, 50))}`;

        }));
    }
    if( objLinks.length === 0 ){
        return chalk.yellowBright ('No se encontraron links')
    }
    return basicPropertys;
}

// console.log(linkFile(prueba));


module.exports = {
    linkFile,
 }
