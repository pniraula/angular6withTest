export class Filter{
    public Type:string;
    public Value:string;
    public Count:number;
    constructor(props:any){
        Object.keys(props).forEach(key=>{
            this[props] = props[key];
        });
    }
}