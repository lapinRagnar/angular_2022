import { Observable, of, EMPTY, Subject, from, BehaviorSubject} from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Hotel, IHotel } from '../shared/models/hotel';
import { HotelListService } from '../shared/services/hotel-list.service';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  public title = 'Liste hotels';

  public hotels$: Observable<IHotel[]> = of([])   // on cree une observable ici

  public showBadge: boolean = true;
  private _hotelFilter = 'mot';

  public filteredHotels$: Observable<IHotel[]> = of([]);

  public receivedRating: string;
  public errMsg: string;


  constructor(private hotelListService: HotelListService) {

  }

  ngOnInit() {

    
    const subject = new Subject<number>()
    const bSubject = new BehaviorSubject<number>(0)


    subject.subscribe({
      next: (value) => console.log('A: ', value)
      
    })
    subject.subscribe({
      next: (value) => console.log('B: ', value)
      
    })

    bSubject.subscribe({
      next: (value) => console.warn('A: ', value)
      
    })
    bSubject.subscribe({
      next: (value) => console.warn('B: ', value)
      
    })
     
    subject.next(1)
    subject.next(2)
    subject.next(3)

    bSubject.next(1)
    bSubject.next(2)
    bSubject.next(3)
    
    subject.subscribe({
      next: (value) => console.log('C: ', value)
      
    })

    bSubject.subscribe({
      next: (value) => console.warn('C: ', value)
      
    })

    
    
    subject.next(12)
    bSubject.next(12)
    





    this.hotels$ = this.hotelListService.hotelsWithCategories$.pipe(
      catchError((err) => {
        this.errMsg = err
        return EMPTY
      })
    )
    this.filteredHotels$ = this.hotels$

    this.hotelFilter = '';
  }

  public filterChange(value: string): void {
    console.log('vaaaalue', value);
    
  }


  public toggleIsNewBadge(): void {
    this.showBadge = !this.showBadge;
  }

  public get hotelFilter(): string {
    return this._hotelFilter;
  }

  public set hotelFilter(filter: string) {
    this._hotelFilter = filter;

    if (this.hotelFilter) {
      this.filteredHotels$ = this.hotels$.pipe(
        map((hotels: IHotel[]) => this.filterHotels(filter, hotels) )
      )
    } else
    {
      this.filteredHotels$ = this.hotels$
    }

  }

  public createFilterHotels(filter$: Observable<string>, hotels$: Observable<IHotel[]> ): Observable<IHotel[]> {

    return 
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
