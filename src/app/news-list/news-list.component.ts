import { Component, Input, OnChanges, OnDestroy, SimpleChanges, ViewChildren } from '@angular/core';
import { NewsService } from '../common/news.service';
import { NewsObject } from '../common/models/news-object';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { NewsItemComponent } from '../news-item/news-item.component';
import { FavouriteService } from '../common/favourite.service';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.less'],
})
export class NewsListComponent implements OnChanges, OnDestroy {
  constructor(private newsService: NewsService, private favService: FavouriteService) { }

  @Input() category: string = "all";
  @ViewChildren(NewsItemComponent)
  private newsComponents!: NewsItemComponent[];

  news: NewsObject[]=[];
  loadingIcon = faSync;
  isLoading: Boolean = false;
  favCount: number = 0;
  newsServiceSubscription: any;

  ngOnChanges(changes: SimpleChanges): void {
    this.favCount= 0;
    this.favService.resetFav();
    this.news = [];
    this.isLoading = true;
    let category = changes['category'].currentValue;
    this.newsServiceSubscription = this.newsService.getNews(category).subscribe((resp:any) =>{
        this.news = resp.data;
        this.isLoading = false;
      });

  }

  toggleAllFavourite() {
    this.newsComponents.forEach(item => {
      item.toggleFavourite();
    });
  }

  onNewsFavouriteChanged(isFav: boolean) {
    if (isFav) this.favCount++;
    else this.favCount--;
  }

  ngOnDestroy(): void {
    this.newsServiceSubscription.unsubscribe();
  }

}
