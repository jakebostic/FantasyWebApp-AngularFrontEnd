import { Injectable } from '@angular/core';
import { Owner } from '../model/owner';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const url: string = 'http://localhost:8080/Owners/';

@Injectable()
export class OwnerService {
  
  list(): Observable<Owner[]> {
    return this.http.get(url+'List') as
    Observable<Owner[]>;
  }
  
  get(id): Observable<Owner[]> {
    return this.http.get(url+"Get?id="+id) as
    Observable<Owner[]>;
  }
  
  change(owner: Owner): Observable<any> {
    return this.http.post(url+"Change", owner) as
    Observable<any>;
  } 

  constructor(private http: HttpClient) { }
  
}
