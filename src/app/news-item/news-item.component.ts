import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NewsObject } from '../common/models/news-object';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { FavouriteService } from '../common/favourite.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.less']
})
export class NewsItemComponent {
  constructor(private favService: FavouriteService) {}
  @Input() newsItem?: NewsObject;
  @Output() onFavourite = new EventEmitter<boolean>();

  favIcon = faStar;
  isFavourite: boolean = false;
  trimLength:number = 200;

  toggleFavourite() {
    this.isFavourite = !this.isFavourite;
    this.favIcon =  this.isFavourite? faSolidStar : faStar;

    this.onFavourite.emit(this.isFavourite);
    this.favService.toggleFav(this.isFavourite);
  }

  showMoreContent() {
    this.trimLength +=50;
  }

}
