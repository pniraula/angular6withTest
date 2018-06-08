export class Alert{
    public AlertId:number;
    public AlertTime:string;
    public Severity:string;
    public ClientIP:string;
    public ServerIP:string;
    public Protocol:string;
    public ClientCountry:string;
    constructor(props:any){
        Object.keys(props).forEach(key=>{
            this[props] = props[key];
        });
    }
}