const fs = require ('fs');
const path = require ('path');
const marked = require ('marked');
const renderer = new marked.Renderer();


// funcion para saber si la ruta es valida - boolean
const checkRoute = (route) => {
    const routeIsValid = fs.existsSync(route);
    if (!routeIsValid) {
      return ('La ruta ingresada no es válida, intente de nuevo por favor');
    }
    return routeIsValid;
  };
 // console.log('ruta ingresada valida', checkRoute('./README.md'));

// función para saber si ruta es absoluta - boolean
const checkAbsolutePath = (route) => path.isAbsolute(route);
 //console.log('la ruta es absoluta', checkAbsolutePath('./README.md'));

// función para transformar ruta relativa a absoluta
const routeAbsolute = (route) => (path.isAbsolute(route) === true ? route : (path.resolve(route)));
//console.log('Transformando la ruta', routeAbsolute('./prueba'));

// verificar si es un archivo - boolean
const isFile = (route) => fs.statSync(route).isFile();
 //console.log('es un archivo', isFile('./README.md'));

// para leer un archivo sincrono
const readFiles = (doc) => fs.readFileSync(doc, 'utf8');
 //console.log('leyendo elementos de un archivo', readFiles('./src/prueba.md'))

// verificar si es un directorio -boolean *
const isDirectory = (route) => fs.lstatSync(route).isDirectory();
//console.log('es un directorio', isDirectory('./README.md'));

//lee los elementos del directorio
const readDirectory = (route) => fs.readdirSync(route);
 //console.log('leyendo elementos del directorio', readDirectory('./src'));

// Función para identificar que tipo de extension es la ruta/directorio
const routeExtension = (route) => path.extname(route);
//console.log('la extencion del archivo es', routeExtension('./test.spec.js'));

//array de las rutas de los elementos del directorio **
const getArrayFilesAndDir = (route) => {
    return readDirectory(route).map(element =>
      path.join(route, element),); //string
  };
//console.log('elementos del directorio con su ruta', getArrayFilesAndDir('./src'));



// funcion que guarda en un array los files con extension .md (con su ruta)
const getFileMD = (route) =>{
   let arrFileMD = [];
    if (isFile(route)) {
        if (routeExtension(route) === '.md'){
            arrFileMD.push(route);
        }
    } else  {
      getArrayFilesAndDir(route).forEach((element) => {
        const fileNewRoute = path.join(element);
        //console.log('REC', fileNewRoute);
        const getMDfileNewRoute = getFileMD(fileNewRoute);
        arrFileMD = arrFileMD.concat(getMDfileNewRoute);
      });
    };
    return arrFileMD;
};
//console.log ('Array exclusivo de file .md', getFileMD('./prueba'));



// extraer los link de los file.md 
const extractLinkFile = (route) => {
   const arrLinks = [];
   getFileMD(route).forEach((file) => {
     renderer.link = (href, title, text) => {
       const link = {
         href,
         text,
         file
       };
       arrLinks.push(link);
     };
     //convierte el contenido del file en html y usa el renderer para buscar 
     marked(readFiles(file), { renderer })
   });
   return arrLinks;
 };

//console.log('extraer link de file', extractLinkFile('./prueba/hola.md'));

module.exports = {
    checkRoute,
    checkAbsolutePath,
    routeAbsolute,
    isFile,
    readFiles,
    isDirectory,
    readDirectory,
    routeExtension,
    getArrayFilesAndDir,
    getFileMD,
    extractLinkFile
}
