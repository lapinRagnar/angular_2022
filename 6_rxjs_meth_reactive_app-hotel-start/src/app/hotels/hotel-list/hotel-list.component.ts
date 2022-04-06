import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Hotel, IHotel } from '../shared/models/hotel';
import { HotelListService } from '../shared/services/hotel-list.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  public title = 'Liste hotels';

  // public hotels: IHotel[] = [];
  public hotels$: Observable<IHotel[]> = of([])   // on cree une observable ici

  public showBadge: boolean = true;
  private _hotelFilter = 'mot';

  // public filteredHotels: IHotel[] = [];
  public filteredHotels$: Observable<IHotel[]> = of([]);

  public receivedRating: string;
  public errMsg: string;


  constructor(private hotelListService: HotelListService) {

  }

  ngOnInit() {

    this.hotels$ = this.hotelListService.getHotels()
    this.filteredHotels$ = this.hotels$

    // this.hotelListService.getHotels().subscribe({
    //   next: hotels => {
    //     this.hotels = hotels;
    //     this.filteredHotels = this.hotels;
    //   },
    //   error: err => this.errMsg = err
    // });

    this.hotelFilter = '';
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
    // this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
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