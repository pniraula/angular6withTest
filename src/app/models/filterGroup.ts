import { Filter } from "./filter";

export class FilterGroup{
    public Title:string;
    public Type:string;
    public Filters:Filter[];
    constructor(props:any){
        Object.keys(props).forEach(key=>{
            this[props] = props[key];
        });
    }
}