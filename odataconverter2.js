const { odata2openapi } = require('odata2openapi');

odata2openapi('https://sapes5.sapdevcenter.com/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/$metadata')
  .then(swagger => console.log(JSON.stringify(swagger, null, 2)))
  .catch(error => console.error(error))