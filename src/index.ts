
import {Container} from 'eye-oh-see'
import * as serv from './services/services'

import * as l from './loader'

import { IPeopleService}  from './services/people'
//import { PeopleService}  from './services/people'
//import { PeopleServiceImpl}  from './services/people'

let context = serv.AutomaticRequires()
context.keys().forEach(context);

function containerMode()
{
    l.loader();
    const container = new Container()

/* ???????    
    container.register(PeopleService)
    container.register(PeopleServiceImpl)
*/
                                                    //??????????????
    //const elem:IPeopleService  = container.resolve<IPeopleService>()

  //  elem.func1()
  //  elem.func2()

}


containerMode()

