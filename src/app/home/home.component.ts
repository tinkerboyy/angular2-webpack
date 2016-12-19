import { Component, OnInit } from '@angular/core';
import { TwitterService } from './home.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Array<string>;
  constructor(private twitterService: TwitterService) {}

  search(term: string) {
    this.twitterService.search(term)
      .subscribe(results => this.items = results);
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
