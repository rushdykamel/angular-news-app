import { Component, OnInit } from '@angular/core';
import { NewsService } from '../common/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit{
  constructor(private newsService: NewsService) {}
  firstExample: string="";
  categories: string[] = [];
  ngOnInit(): void {
    this.categories = this.newsService.getCategories();
  }
}
