import {flatten} from 'lodash';

var cache = {};

function importAll (r) 
{
    r.keys().forEach(key => cache[key] = r(key));
}

export function loader():any
{

    let context = require.context('./services', true, /\.ts$/)
 //   console.log(context)
  //  importAll(aux)

//    console.log(cache)


    
    //const context = this.context();
    const moduleObjects = context.keys().map(context);
    //console.log(moduleObjects)    
    const moduleExports = flatten(moduleObjects.map(moduleObject => Object.keys(moduleObject).map(k => moduleObject[k])));
    //console.log(moduleExports)    
    const serviceExports = moduleExports.filter(moduleExport => typeof moduleExport === 'function');

    return serviceExports;
    //console.log(serviceExports)    

  

}