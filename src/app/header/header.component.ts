import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../common/news.service';
import { FavouriteService } from '../common/favourite.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit, OnDestroy {
  
  categories: string[] = [];
  favCount: number = 0;
  favIcon = faStar;
  favSubscription: any; 

  constructor (private newsService:NewsService, private favService: FavouriteService) { }

  ngOnInit() {
    this.categories = this.newsService.getHighlightedCategories();
    this.favSubscription = this.favService.favCountObservable.subscribe(val => {
      this.favCount = val;
    });
  }

  ngOnDestroy() {
    this.favSubscription.unsubscribe();
  }

}
