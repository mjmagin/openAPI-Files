const { odata2openapi } = require('odata2openapi');

const fs = require('fs');

odata2openapi('https://raw.githubusercontent.com/mjmagin/openAPI-Files/master/sapES5GWSampleBasicMetadata.xml')
  .then(swagger => console.log(JSON.stringify(swagger, null, 2)))

  .catch(error => console.error(error))

 // fs.writeFile('swagger.json', JSON.stringify(swagger, null, 2), (err) => {  
    // throws an error, you could also catch it here
   // if (err) throw err;

    // success case, the file was saved
    //console.log('swagger saved!');
//});