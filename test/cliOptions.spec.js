const { validate, stats, statsandValidate, linkFile } = require ('../src/cliOptions.js');
const chalk = require ('chalk');
const path = require('path');

const linksOutput = [
    {
href: 'https://es.wikipedia.org/wiki/Markdown',
text: 'Markdown',
file: path.join(process.cwd(), 'prueba', 'hola.md'),
statusText: 'ok',
status: 200
    },
    {
href: 'https://nodejs.org/en/',
text: 'Node.js',
file: path.join(process.cwd(), 'prueba', 'hola.md'),
statusText: 'ok',
status: 200
    },
    {
href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452esssss',
text: 'mediumError',
file: path.join(process.cwd(), 'prueba', 'hola.md'),
statusText: 'fail',
status: 404
    }
  ]

const validateOutput = `
${chalk.magenta('Href: ')}${chalk.yellowBright('https://es.wikipedia.org/wiki/Markdown')}
${chalk.magenta('Text: ')}${chalk.yellowBright('Markdown')}
${chalk.magenta('File: ')}${chalk.yellowBright(path.join(process.cwd(), 'prueba', 'hola.md'))}
${chalk.magenta('Status Text: ')}${chalk.yellowBright('ok')}
${chalk.magenta('Status: ')}${chalk.yellowBright(200)}

${chalk.magenta('Href: ')}${chalk.yellowBright('https://nodejs.org/en/')}
${chalk.magenta('Text: ')}${chalk.yellowBright('Node.js')}
${chalk.magenta('File: ')}${chalk.yellowBright(path.join(process.cwd(), 'prueba', 'hola.md'))}
${chalk.magenta('Status Text: ')}${chalk.yellowBright('ok')}
${chalk.magenta('Status: ')}${chalk.yellowBright(200)}

${chalk.magenta('Href: ')}${chalk.yellowBright('https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452esssss')}
${chalk.magenta('Text: ')}${chalk.yellowBright('mediumError')}
${chalk.magenta('File: ')}${chalk.yellowBright(path.join(process.cwd(), 'prueba', 'hola.md'))}
${chalk.magenta('Status Text: ')}${chalk.yellowBright('fail')}
${chalk.magenta('Status: ')}${chalk.yellowBright(404)}\n`;  

const stastOutput = `
${chalk.magenta ('Total: ')}${chalk.yellowBright(3)}
${chalk.magenta ('Unique: ')}${chalk.yellowBright(3)}`;

const stastandValidateOutput = `
${chalk.magenta('Total: ')} ${chalk.yellowBright(3)}
${chalk.magenta('Unique: ')} ${chalk.yellowBright(3)}
${chalk.magenta('Broken: ')} ${chalk.yellowBright(1)}`;

const linkFileOutput = `
${chalk.magenta('Href: ')}${chalk.yellowBright('https://es.wikipedia.org/wiki/Markdown')}
${chalk.magenta('Text: ')}${chalk.yellowBright('Markdown')}
${chalk.magenta('File: ')}${chalk.yellowBright(path.join(process.cwd(), 'prueba', 'hola.md'))}

${chalk.magenta('Href: ')}${chalk.yellowBright('https://nodejs.org/en/')}
${chalk.magenta('Text: ')}${chalk.yellowBright('Node.js')}
${chalk.magenta('File: ')}${chalk.yellowBright(path.join(process.cwd(), 'prueba', 'hola.md'))}

${chalk.magenta('Href: ')}${chalk.yellowBright('https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452esssss')}
${chalk.magenta('Text: ')}${chalk.yellowBright('mediumError')}
${chalk.magenta('File: ')}${chalk.yellowBright(path.join(process.cwd(), 'prueba', 'hola.md'))}\n`;


describe('Opcion validate', () => {
    it('Es una funcion', () => {
        expect (typeof validate).toBe('function');
    });
    it('deberia retornar href, text, file, status text, status', () => {
        expect(validate(linksOutput)).toEqual(validateOutput);
    });
  });

describe('Opcion Stats', () => {
    it('Es una funcion', () => {
        expect (typeof stats).toBe('function');
    });
    it('deberia retornar total y unique', () => {
        expect(stats(linksOutput)).toEqual(stastOutput);
    });
  });

  describe('Opcion Stats & validate', () => {
    it('Es una funcion', () => {
        expect (typeof statsandValidate).toBe('function');
    });
    it('deberia retornar total, unique y broken', () => {
        expect(statsandValidate(linksOutput)).toEqual(stastandValidateOutput);
    });
  });  

describe('Opcion linkFile', () => {
    it('Es una funcion', () => {
        expect (typeof linkFile).toBe('function');
    });
    it('deberia retornar href, text, file', () => {
        expect(linkFile(linksOutput)).toEqual(linkFileOutput);
    });
    it('deberia retornar No se encontraron links', () => {
        expect(linkFile([])).toEqual(chalk.red ('No se encontraron links'));
    });
  });  


