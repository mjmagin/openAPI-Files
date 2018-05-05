const { parse, convert } = require('odata2openapi');

// Get the OData metadata as a string.
const xml = '';

const options = {
  host: 'https://sapes5.sapdevcenter.com',
  path: '/sap/opu/odata/IWBEP/GWSAMPLE_BASIC'
};

parse(xml)
  .then(entitySets => convert(entitySets, options))
  .then(swagger => console.log(JSON.stringify(swagger, null, 2)))
  .catch(error => console.error(error))