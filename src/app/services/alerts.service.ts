import { Injectable, inject } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Alert } from "../models/alert";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
@Injectable()
export class AlertsService{

    constructor(private http:Http){

    }
    
    public getAlerts():Observable<Alert[]>{
        return this.http.get('../../assets/data/alerts.json').pipe(map(resp=>resp.json()));
    }
}