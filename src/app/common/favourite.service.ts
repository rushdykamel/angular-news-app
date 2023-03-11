import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  constructor() { }

  favCount: number=0;
  private favCountSource = new BehaviorSubject(this.favCount);
  favCountObservable = this.favCountSource.asObservable();

  toggleFav(isFav:boolean) {
    let newVal =  this.favCountSource.getValue();
    if (isFav) newVal++;
    else newVal--;

    this.favCountSource.next(newVal);
  }

  resetFav() {
    this.favCountSource.next(0);
  }

}
