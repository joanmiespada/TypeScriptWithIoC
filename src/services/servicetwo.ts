

interface IServiceTwo
{
    foo():void;
}

class ServiceTwoImplement implements IServiceOne
{

    public foo():void{
        console.log('ServiceTwoImplement instance')
    }

}
