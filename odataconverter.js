const { parse, convert } = require('odata2openapi');

// Get the OData metadata as a string.
const xml = '';

const options = {
  host: 'https://orgf3cfd067.crm11.dynamics.com/api/data/v9.1'
};

parse(xml)
  .then(entitySets => convert(entitySets, options))
  .then(swagger => console.log(JSON.stringify(swagger, null, 2)))
  .catch(error => console.error(error))