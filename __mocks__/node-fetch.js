const nodeFetch = jest.requireActual('node-fetch');
const fetchMock = require('fetch-mock').sandbox();
Object.assign(fetchMock.config, nodeFetch, {
  fetch: nodeFetch
});

fetchMock
.mock('https://nodejs.org/en/', 200)
.mock('https://es.wikipedia.org/wiki/Markdown', 200)
.mock('https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452esssss', 404)

module.exports = fetchMock;