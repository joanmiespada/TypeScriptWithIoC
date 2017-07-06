
import { InstancePerDependency, SingleInstance  } from 'eye-oh-see'
import {Container} from 'eye-oh-see'


interface IPeopleService
{
    func1():void;
    func2():any;
}


abstract class PeopleService
{
    func1():void{
        console.log('func1 from abstract class')
    }
}

//@InstancePerDependency(IPeopleService)
@SingleInstance(PeopleService)
class PeopleServiceImpl extends PeopleService
{
    func2():any{ 
        console.log('func2 from instance')
        return 1
      }
    func1():void{
        console.log('func1 from instance')
    }
}  

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

