export default abstract class AbsOrder{
    abstract getName():string;
    test(){
        console.log('this.getName()',this.getName());
    }
}