import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const url: string = 'http://localhost:8080/Players/';

@Injectable()
export class PlayerService {
  
  list(): Observable<Player[]> {
    return this.http.get(url+'List') as
    Observable<Player[]>;
  }
  
  get(id): Observable<Player[]> {
    return this.http.get(url+'Get?id='+id) as
    Observable<Player[]>
  }
  
  create(player: Player): Observable<any> {
    console.log("plyrsvc.create...");
    return this.http.post(url+"Add", player) as
    Observable<any>;
  }
  
  remove(id): Observable<any> {
    return this.http.get(url+"Remove?id="+id) as
    Observable<any>;
  }
  
  change(player: Player): Observable<any> {
    return this.http.post(url+"Change", player) as
    Observable<any>;
  }

  constructor(private http: HttpClient) { }

}
