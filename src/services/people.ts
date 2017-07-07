
import { InstancePerDependency, SingleInstance  } from 'eye-oh-see'

export interface IPeopleService
{
    func1():void;
    func2():any;
}


export abstract class PeopleService
{
    func1():void{
        console.log('func1 from abstract class')
    }
}

//@InstancePerDependency(IPeopleService)
@SingleInstance(PeopleService)
export class PeopleServiceImpl extends PeopleService
{
    func2():any{ 
        console.log('func2 from instance')
        return 1
      }
    func1():void{
        console.log('func1 from instance')
    }
}  