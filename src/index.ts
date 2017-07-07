
import {Container} from 'eye-oh-see'
import * as serv from './services/services'

import * as l from './loader'

import { IPeopleService}  from './services/people'
//import { PeopleService}  from './services/people'
import { PeopleServiceImpl}  from './services/people'

//let context = serv.AutomaticRequires()
//context.keys().forEach(context);

function containerMode()
{
    const container = new Container()

    const ObjectsToBeRegistered:any = l.loader();

    ObjectsToBeRegistered.forEach(f => container.register(f))

    const elem:IPeopleService  = container.resolve(PeopleServiceImpl)

    elem.func1()
    elem.func2()

}


containerMode()
