const { extractLinkFile } = require ('./index.js');
const { optionValidate } = require ('./validate.js');

const mdLinks = (route, options = { optionValidate : false}) => {
    return promesa = new Promise ((result) => {
        if (options.validate === true ) {
            result (optionValidate(route))
        } else {
            result (extractLinkFile(route))
        }
    });
}

// mdLinks(('./src/prueba.md'), { validate: true }).then((res) => console.log(res));

module.exports = {mdLinks};