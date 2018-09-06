import { Injectable } from '@angular/core';
import { Team } from '../model/team';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const url: string = 'http://localhost:8080/Teams/';

@Injectable()
export class TeamService {
  
  list(): Observable<Team[]> {
    return this.http.get(url+'List') as Observable<Team[]>;
  }
  
  get(id): Observable<Team[]> {
    return this.http.get(url+"Get?id="+id) as Observable<Team[]>;
  }
  
  change(team: Team): Observable<any> {
    return this.http.post(url+"Change", team) as Observable<any>
  }

  constructor(private http: HttpClient) { }

}
