const { extractLinkFile } = require ('./index.js');
const { optionValidate } = require ('./validate.js');

const mdLinks = (route, options = { optionValidate : false}) => {
    return promesa = new Promise ((resolve) => {
        if (options.validate === true ) {
            resolve (optionValidate(route))
        } else {
            resolve (extractLinkFile(route))
        }
    });
}

mdLinks(('./src/prueba.md'), { validate: true }).then((res) => console.log(res));

module.exports = {mdLinks};