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

//mdLinks(('./prueba')).then((res) => console.log('holaaaaaaa',res));
console.log(mdLinks('./prueba'))

module.exports = {mdLinks};