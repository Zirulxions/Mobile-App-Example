import { Component, OnInit } from '@angular/core';

import { ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

import { NewsService } from '../news.service';

@Component({
  selector: 'app-scrolling',
  templateUrl: './scrolling.page.html',
  styleUrls: ['./scrolling.page.scss'],
})
export class ScrollingPage implements OnInit {

  data: any;
  page = 1;
  date: any;
  finalDate: any;

 	constructor(private newsService: NewsService) { }

	ngOnInit() {
    var currentDate = new Date();
    var month = currentDate.getUTCMonth() + 1; //months from 1-12
    var day = currentDate.getUTCDate();
    var year = currentDate.getUTCFullYear();
    this.date = year + "-" + month + "-" + day;
    this.finalDate = year + "-" + month +"-01";
    console.log(this.date);
    this.newsService.getData(`everything?q=bitcoin&from=${this.date}&sortBy=publishedAt&pageSize=5&page=${this.page}`).subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

  loadMore(event){
    this.page++;
    console.log(event);
    console.log(this.finalDate);
    this.newsService.getData(`everything?q=bitcoin&from=${this.finalDate}&sortBy=publishedAt&pageSize=5&page=${this.page}`).subscribe(data => {
      //console.log(data);
      //this.data = data;
      for(const article of data['articles']){
        this.data.articles.push(article);
      }
      event.target.complete();
      console.log(this.data);
    });
  }
}
