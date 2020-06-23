# Markdown Links 📑
[![Node version](https://img.shields.io/badge/node-v13.1.0-green)](https://nodejs.org/es/) ![Coverage Status](https://img.shields.io/badge/coverage-100%25-magenta) ![npm dependents](https://img.shields.io/badge/dependencies-5-pink)


[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

## ✔️ Libreria: mdLinks
Es una herramienta que usa [Node.js](https://nodejs.org/), para leer y analizar archivos en formato `Markdown`
y verifica los links que contengan y reportan algunas estadísticas.

## ✔️ Diagrama de flujo md-links

![](https://github.com/LourdesMep29/LIM012-fe-md-links/blob/ludevelop/img/diagrama%20md-links.png)

## ✔️ Diagrama de flujo cli

![](https://github.com/LourdesMep29/LIM012-fe-md-links/blob/ludevelop/img/diagrama%20cli.png)

## ✔️ Guía de instalación

- Instalar la librería vía `npm install LourdesMep29/lu-mdlinks`

## ✔️ Guía de Uso

#### ⚫ Cómo módulo:

```js
const mdLinks = require("lu-mdlinks");
```
##### Ejemplo

```js
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
```

#### ⚫ A traves de Linea de Comandos

`mdLinks <path-to-file> [options]`

##### Ejemplo

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

![](https://github.com/LourdesMep29/LIM012-fe-md-links/blob/ludevelop/img/option%20console.png)

## ✔️ JavaScript API

#### ⚫ JavaScript API - validate TRUE

Opción `{ validate: true }`
![](https://github.com/LourdesMep29/LIM012-fe-md-links/blob/ludevelop/img/API%20validate%20true.png)

#### ⚫ JavaScript API - validate FALSE

Opción `{ validate: false }`
![](https://github.com/LourdesMep29/LIM012-fe-md-links/blob/ludevelop/img/API%20validate%20false.png)

## CLI (Command Line Interface - Interfaz de Línea de Comando)

#### ⚫ CLI Validate

Opción (route) --validate file
![](https://github.com/LourdesMep29/LIM012-fe-md-links/blob/ludevelop/img/cli%20validate.png)

Opción (route) --validate directorio
![](https://github.com/LourdesMep29/LIM012-fe-md-links/blob/ludevelop/img/cli%20dir%20validate.png)

#### ⚫ CLI Stats

Opción (route) --stats

![](https://github.com/LourdesMep29/LIM012-fe-md-links/blob/ludevelop/img/cli%20stats.png)

#### ⚫ CLI --stats --validate

Opción (route) --validate --stats

![](https://github.com/LourdesMep29/LIM012-fe-md-links/blob/ludevelop/img/cli%20validate%20stats.png)

#### ⚫ CLI (sin option)

Opción (sólo route) 

![](https://github.com/LourdesMep29/LIM012-fe-md-links/blob/ludevelop/img/cli%20sin%20option.png)

## ✔️ Test

#### ⚫ Test 

![](https://github.com/LourdesMep29/LIM012-fe-md-links/blob/ludevelop/img/npm%20test.png)

#### ⚫ Test Index.js

![](https://github.com/LourdesMep29/LIM012-fe-md-links/blob/ludevelop/img/test%20index.png)

#### ⚫ Test cliOption.js

![](https://github.com/LourdesMep29/LIM012-fe-md-links/blob/ludevelop/img/test%20cliOptions.png)


## ✔️ Objetivos de aprendizaje

### Javascript
- [ ] Uso de callbacks
- [ ] Consumo de Promesas
- [ ] Creacion de Promesas
- [ ] Modulos de Js
- [ ] Recursión

### Node
- [ ] Sistema de archivos
- [ ] package.json
- [ ] crear modules
- [ ] Instalar y usar modules
- [ ] npm scripts
- [ ] CLI (Command Line Interface - Interfaz de Línea de Comando)

### Testing
- [ ] Testeo de tus funciones
- [ ] Testeo asíncrono
- [ ] Uso de librerias de Mock
- [ ] Mocks manuales
- [ ] Testeo para multiples Sistemas Operativos

### Git y Github
- [ ] Organización en Github

### Buenas prácticas de desarrollo
- [ ] Modularización
- [ ] Nomenclatura / Semántica
- [ ] Linting

***

