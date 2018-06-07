import { Injectable, inject } from "@angular/core";
import { Http } from "@angular/http";

import { Alert } from "../models/alert";
@Injectable()
export class AlertsService{

    constructor(private http:Http){

    }
    
    public getAlerts(){
        return this.http.get('../../assets/data/alerts.json');
    }
}