import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
// import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4';
  private apiurl = 'http://162.17.231.117:1313/SpinoService.svc/getcountrylist';
  data: any = {};

  constructor(private http: Http) {
    console.log('hello web service');
    this.getContract();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiurl)
      .map((res: Response) => res.json())
  }
  getContract() {
    this.getData().subscribe(data => {
      console.log(data.GetCountryListResult);
      this.data = data.GetCountryListResult;
    })

  }
}
