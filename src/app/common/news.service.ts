import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsListResponse } from './models/news-list';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private httpClient: HttpClient) { }


  getHighlightedCategories(): string[] {
    return [
      'all',
      'world',
      'business',
      'sports',
      'politics',
      'technology',
      'entertainment',
      'science',
    ];
  };

  getCategories(): string[] {
    return [
      'business',
      'sports',
      'world',
      'politics',
      'technology',
      'startup',
      'entertainment',
      'miscellaneous',
      'hatke',
      'science',
      'automobile'
    ];
  }

  getNews(category: string) {
    return this.httpClient.get(`https://inshorts.deta.dev/news?category=${category}`);
  }
}
