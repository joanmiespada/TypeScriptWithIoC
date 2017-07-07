import { SingleInstance } from 'eye-oh-see';

interface IServiceOne
{
    foo():void;
}

@SingleInstance()
class ServiceOneImplement implements IServiceOne
{

    public foo():void{
        console.log('ServiceOneImplement instance')
    }

}
