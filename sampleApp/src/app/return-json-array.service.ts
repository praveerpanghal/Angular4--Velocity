import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ReturnJsonArrayService {

  constructor(private http: Http) { }
  getPeople(): Observable<any> {
    return this.http.get("assets/file.json")
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || "server error"));
  }
}
