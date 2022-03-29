import { HotelListService } from './../../services/hotel-list.service';
import { IHotel } from './../../interfaces/hotel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  public title= "Liste d'hotel"

  public hotels: IHotel[] = []

  public showBadge: boolean = true

  private _hotelFilter = 'mot'

  public filteredHotels: IHotel[] = []

  public receivedRating: string = ''

  constructor(public hotelListService: HotelListService) { }

  ngOnInit(): void {

    this.hotels = this.hotelListService.getHotels()
    this.filteredHotels = this.hotels
    this.hotelFilter = ""
    
  }

  public toggleIsNewBaddge() : void {
    this.showBadge = !this.showBadge
  }

  public get hotelFilter(): string {
    return this._hotelFilter
  }

  public set hotelFilter(filter: string) {
    
    this._hotelFilter = filter
    this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels
  }

  private filterHotels (criteria: string): IHotel[] {
    
    criteria = criteria.toLocaleLowerCase()

    const res = this.hotels.filter((hotel: IHotel) => {
      hotel.hotelName.toLocaleLowerCase().indexOf(criteria) !== -1
    })

    return res
  }

  public receiveRatingClicked(message: string): void {

      this.receivedRating = message
  }

}
