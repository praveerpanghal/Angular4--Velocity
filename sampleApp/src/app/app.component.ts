import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4';
  private apiurl = 'assets/file.json'; 
  data: any = [];

  constructor(private http: Http) {   
    this.getContract();  
  }

  getData() {
    return this.http.get(this.apiurl)
      .map((res: Response) => res.json())
      
  }

  public getjson(): Observable<any> {
    return this.http.get(this.apiurl)
                    .map((res:any) => res.json());

}
  getContract() {
    this.getData().subscribe(data => {
      this.data = data['People'];
    })

  }
}
