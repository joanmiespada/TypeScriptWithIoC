
import {Container} from 'eye-oh-see'
import { IPeopleService}  from './services/people'
import { PeopleService}  from './services/people'
import { PeopleServiceImpl}  from './services/people'



function classicMode()
{
    const aux:IPeopleService = new PeopleServiceImpl()
    aux.func1()
    aux.func2()
}

function containerMode()
{
    const container = new Container()
    container.register(PeopleService)
    container.register(PeopleServiceImpl)

    const elem:IPeopleService  = container.resolve(PeopleServiceImpl)

    elem.func1()
    elem.func2()

}

containerMode()

