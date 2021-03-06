import {Injectable} from '@angular/core';

import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import {Logger} from './logger.service';

import {Staff} from '../model/staff.model';
import { environment } from '../../environments/environment';

@Injectable()
export class StaffService{

    api : string = environment.appurl;
    endpoint : string = "staff";

    constructor(private http : Http,
        private logger : Logger){

    }

    public getStaff(busid : string, staffId : string) : Observable<Staff>{
        return this.http.get(this.api + this.endpoint+"/"+busid +"/" + staffId).map(
            (response : Response) => {
                let staff : Staff;
                let staffObj = response.json();
                staff = new Staff(staffObj);
                return staff;
            }
        );
    }
}