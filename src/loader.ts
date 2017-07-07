
var cache = {};

function importAll (r) 
{
    r.keys().forEach(key => cache[key] = r(key));
}

export function loader():any
{

    let aux = require.context('./services', true, /\.js$/)
    console.log(aux)
    importAll(aux)

    console.log(cache)

}