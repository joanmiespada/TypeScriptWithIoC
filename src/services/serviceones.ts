

interface IServiceOne
{
    foo():void;
}

class ServiceOneImplement implements IServiceOne
{

    public foo():void{
        console.log('ServiceOneImplement instance')
    }

}
