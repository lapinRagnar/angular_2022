import { IHotel } from './../../../interfaces/hotel';
import { HotelListService } from './../../../services/hotel-list.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  public hotel: IHotel = <IHotel>{}

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelListService
  ) { }

  ngOnInit(): void {

    const id: number =  +this.route.snapshot.paramMap.get('id')!

    console.log(" mon id : ", id);
    

    // const id = 1

    this.hotelService.getHotels().subscribe((hotels: IHotel[]) => {
      
      this.hotel = hotels.find(hotel => hotel.hotelId === id)!
      console.log("mon hotel ", this.hotel);
      
    } )
  }

}
