

interface IServiceTwo
{
    foo():void;
}

class ServiceTwoImplement implements IServiceTwo
{

    public foo():void{
        console.log('ServiceTwoImplement instance')
    }

}
