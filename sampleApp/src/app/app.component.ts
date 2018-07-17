import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { ReturnJsonArrayService } from './return-json-array.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ReturnJsonArrayService]
})
export class AppComponent {
  title = 'Angular 4';
  private apiurl = 'assets/file.json';
  data: any;
  myInfo: any = [];
  name: string;
  desc: string;
  likes: string;
  dislikes: string;
  image: string;

  constructor(private service: ReturnJsonArrayService) {
    service.getPeople().subscribe(data => {
      this.data = data['People'];
      this.name = this.data[0].name;
      this.desc = this.data[0].Description;
      this.likes = this.data[0].Likes;
      this.dislikes = this.data[0].Dislikes;
      this.image = this.data[0].img;
    })
  }
   
  loadprofile(name, desc, likes, dislikes, img) {
    this.name = name;
    this.desc = desc;
    this.likes = likes;
    this.dislikes = dislikes;
    this.image = img;
  }

}
