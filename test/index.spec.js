const path = require ('path');

const {
  checkRoute, checkAbsolutePath, routeAbsolute,  isFile, readFiles, isDirectory,
  readDirectory,  routeExtension,  getArrayFilesAndDir, getFileMD, extractLinkFile
} = require ('../src/index.js')


describe('Verificar si la ruta es valida', () => {
  it('Es una funcion', () => {
      expect (typeof checkRoute).toBe('function');
  });
  it('Debe verificar si la ruta ingresada es valida', () => {
    expect(checkRoute('./README.md')).toBe(true);
});
});


describe('Verficar si la ruta es absoluta', () => {
  it('Es una funcion', () => {
      expect (typeof checkAbsolutePath).toBe('function');
  });
  it('Debe retornar true si la ruta es absoluta', () => {
    expect(checkAbsolutePath('C:\\Users\\Lourdes\\Documents\\GitHub\\LIM012-fe-md-links\\README.md')).toBe(true);
});
  it('Debe retornar false si la ruta no es absoluta', () => {
    expect(checkAbsolutePath('./README.md')).toBe(false);
});
});


describe('Transformar la ruta a abosulta', () => {
  it('Es una funcion', () => {
      expect (typeof routeAbsolute).toBe('function');
  });
  it('Debe transformar la ruta a absoluta', () => {
    expect(routeAbsolute('./README.md')).toBe('C:\\Users\\Lourdes\\Documents\\GitHub\\LIM012-fe-md-links\\README.md');
});
});


describe('Verificar si es un file', () => {
  it('Es una funcion', () => {
      expect (typeof isFile).toBe('function');
  });
  it('Debe verificar si la ruta ingresada es un archivo: true', () => {
    expect(isFile('./README.md')).toBe(true);
});
});


describe('Identificar los elementos del file', () => {
  it('Es una funcion', () => {
      expect (typeof readFiles).toBe('function');
  });
  it('Debe identificar los elementos del file', () => {
    expect(readFiles(path.join('./src/hola.md'))).toEqual('**Hola MUNDO**');
});
});


describe('Verificar si es un directorio', () => {
  it('Es una funcion', () => {
      expect (typeof isDirectory).toBe('function');
  });
  it('Debe verificar si la ruta ingresada es un directorio: false', () => {
    expect(isDirectory('./src')).toBe(true);
});
});


describe('Identificar los elementos del directorio', () => {
  it('Es una funcion', () => {
      expect (typeof readDirectory).toBe('function');
  });
  it('Debe identificar los elementos del directorio', () => {
    const identDir = ['cli.js', 'cliOptions.js', 'hola.md', 'index.js', 'mdLinks.js', 'prueba.md', 'validate.js']
    expect(readDirectory(path.join('./src'))).toEqual(identDir);
});
});


describe('Identificar el tipo de extension', () => {
  it('Es una funcion', () => {
      expect (typeof routeExtension).toBe('function');
  });
  it('Debe identificar el tipo de extension del archivo', () => {
    expect(routeExtension('./README.md')).toBe('.md');
});
});


describe('Identificar las rutas de los elementos del directorio', () => {
  it('Es una funcion', () => {
      expect (typeof getArrayFilesAndDir).toBe('function');
  });
  it('Debe identificar las rutas de los elementos del directorio', () => {
    const outputDir = ['src\\cli.js','src\\cliOptions.js', 'src\\hola.md', 'src\\index.js', 'src\\mdLinks.js', 'src\\prueba.md', 'src\\validate.js',]
    expect(getArrayFilesAndDir(path.join('./src'))).toEqual(outputDir);
});
});


describe('Guardar en un array los files con extension .md', () => {
  it('Es una funcion', () => {
      expect (typeof getFileMD).toBe('function');
  });
  it('Debe guardar los file md en un array', () => {
    const outputfilemd = [ 'src\\hola.md', 'src\\prueba.md' ]
    expect(getFileMD(path.join('./src'))).toEqual(outputfilemd);
});
});

describe('Extraer los links de los file .md', () => {
  it('Es una funcion', () => {
      expect (typeof extractLinkFile).toBe('function');
  });
  it('Debe guardar los file md en un array', () => {
    const outputLinksfile = [
      {
        href: "https://es.wikipedia.org/wiki/Markdown",
        text: "Markdown",
        file: "src\\prueba.md"
      },
      {
        href: "https://nodejs.org/",
        text: "Node.js",
        file: "src\\prueba.md"
      }
    ]
    expect(extractLinkFile(path.join('./src/prueba.md'))).toEqual(outputLinksfile);
});
});
