export class Filter{
    public Type:number;
    public Value:string;
    constructor(props:any){
        Object.keys(props).forEach(key=>{
            this[props] = props[key];
        });
    }
}