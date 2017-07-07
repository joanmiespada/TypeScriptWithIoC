//const pepe = require('werwer'); 

export function AutomaticRequires():any
{
      return require.context('./', true, /[^.].\.tsx?$/);
}