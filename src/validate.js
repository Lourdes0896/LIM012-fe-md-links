const processIndex = require ('./index.js');
const fetch = require ('node-fetch'); 


const optionValidate = (route) => {
    return Promise.all (processIndex.extractLinkFile(route).map((element) => {
        return fetch (element.href)
        .then((res) => {
            let mensaje;
      const newobject = {
        href: element.href,
        text: element.text,
        file: element.file,
      };
      (res.status >= 200 && res.status <= 399) ? mensaje = 'ok' : mensaje = 'fail';
      newobject.statusText = mensaje;
      newobject.status = res.status;
      return newobject;
        })
    }));
};
  
optionValidate('./prueba').then((resp) => console.log('holaaaaaaa', resp));

module.exports = {
  optionValidate
}


