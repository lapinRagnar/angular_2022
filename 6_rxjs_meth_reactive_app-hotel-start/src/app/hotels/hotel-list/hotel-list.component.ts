import { Observable, of, EMPTY, Subject, combineLatest, BehaviorSubject, interval, merge } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Hotel, IHotel } from '../shared/models/hotel';
import { HotelListService } from '../shared/services/hotel-list.service';
import { map, catchError, take, shareReplay, tap, scan, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelListComponent implements OnInit {
  public title = 'Liste hotels';

  public hotels$: Observable<IHotel[]> = of([])   // on cree une observable ici

  public showBadge: boolean = true;
  private _hotelFilter = 'mot';

  public filteredHotels$: Observable<IHotel[]> = of([]);

  public filterSubject: Subject<string> = new BehaviorSubject<string>('');

  public receivedRating: string;
  public errMsg: string;

  private errMsgSubject: Subject<string> = new Subject<string>()
  public errMsg$ = this.errMsgSubject.asObservable()


  constructor(private hotelListService: HotelListService) {

  }

  ngOnInit() {

    of(1, 2, 3, 4, 5).pipe(
      scan((acc, value) => acc + value, 0)
    ).subscribe(console.log)

    // scan retourne une valeure successive
    // retourne : 1 3 6 10 15

    of(1, 2, 3, 4, 5).pipe(
      scan((acc, value) => [...acc, value], [])
    ).subscribe(console.log)
    
    // retourne [1, 2, 3, 4, 5]

    of(1, 2, 3, 4, 5).pipe(
      scan((acc, value) => [...acc, value], [3])
    ).subscribe(console.log)

    // retourne : [3, 1, 2, 3, 4, 5]

    of(1, 2, 3, 4, 5).pipe(
      scan((acc, value) => [value,...acc ], [0])
    ).subscribe(console.log)
    
    // retourne [5, 4, 3, 2, 1, 0]

    // cas d'utilisation de reduce
    // retourne une valeur ponctuelle

    of(1, 2, 3, 4, 5).pipe(
      reduce((acc, value) => [...acc,value], [0])
    ).subscribe(console.log)
    
    // merci

    this.hotels$ = this.hotelListService.hotelsWithCategories$.pipe(
      catchError((err) => {
        // this.errMsg = err
        this.errMsgSubject.next(err)
        return EMPTY
      })
    )

    this.filteredHotels$ = this.createFilterHotels(this.filterSubject, this.hotels$)

    this.hotelFilter = '';
  }



  public filterChange(value: string): void {
    this.filterSubject.next(value)
  }


  public toggleIsNewBadge(): void {
    this.showBadge = !this.showBadge;
  }

  public get hotelFilter(): string {
    return this._hotelFilter;
  }

  public set hotelFilter(filter: string) {
    
    this._hotelFilter = filter;

  }

  public createFilterHotels(filter$: Observable<string>, hotels$: Observable<IHotel[]> ): Observable<IHotel[]> {

    return combineLatest(hotels$, filter$, (hotels: IHotel[], filter: string) => {
      if (filter === '') return hotels
      return hotels.filter(
        (hotel: IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(filter) !== -1)
    })
  }

  public receiveRatingClicked(message: string): void {
    this.receivedRating = message;
  }


  private filterHotels(criteria: string, hotels: IHotel[]): IHotel[] {
    criteria = criteria.toLocaleLowerCase();

    const res = hotels.filter(
      (hotel: IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(criteria) !== -1
    );

    return res;
  }
}
