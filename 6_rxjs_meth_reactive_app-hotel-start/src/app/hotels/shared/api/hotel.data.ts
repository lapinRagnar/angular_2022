import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IHotel } from '../models/hotel';


export class HotelData implements InMemoryDbService {

  createDb(): Record<string, IHotel[]> {

    const hotels: IHotel[] = [
      {
        id: 1,
        hotelName: 'Buea sweet life',
        description: 'Belle vue au bord de la mer',
        price: 230.5,
        imageUrl: 'assets/img/hotel-room.jpg',
        rating: 3.5,
        tags: ['nouveau'],
        categoryId: 0
      }, {
        id: 2,
        hotelName: 'Marakech',
        description: 'Profitez de la vue sur les montagnes',
        price: 145.5,
        imageUrl: 'assets/img/the-interior.jpg',
        rating: 5,
        tags: ['nouveau'],
        categoryId: 1
      }, {
        id: 3,
        hotelName: 'Abudja new look palace',
        description: 'Séjour complet avec service de voitures',
        price: 120.12,
        imageUrl: 'assets/img/indoors.jpg',
        rating: 4,
        tags: ['nouveau'],
        categoryId: 1
      }, {
        id: 4,
        hotelName: 'Cape town city',
        description: 'Magnifique cadre pour votre séjour',
        price: 135.12,
        imageUrl: 'assets/img/window.jpg',
        rating: 2.5,
        tags: ['nouveau'],
        categoryId: 0
      }, {
        id: 5,
        hotelName: 'Hôtels à Playa d\'en Bossa',
        description: 'Magnifique cadre pour votre séjour',
        price: 135.12,
        imageUrl: 'https://www.palladiumhotelgroup.com/content/dam/palladium/content-fragments/es/hoteles/ushua%C3%AFa-ibiza-beach-hotel/im%C3%A1genes/ushuaia-ibiza-beach-hotel.jpg.transform/rendition-md/image.jpg',
        rating: 2.5,
        tags: ['nouveau'],
        categoryId: 0
      }, {
        id: 6,
        hotelName: 'Cape town city',
        description: 'Magnifique cadre pour votre séjour',
        price: 135.12,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Cordoba_Center_Hotel_in_Cordoba%2C_Spain.jpg/1200px-Cordoba_Center_Hotel_in_Cordoba%2C_Spain.jpg',
        rating: 2.5,
        tags: ['nouveau'],
        categoryId: 1
      }
    ];

    return { hotels };
  }

  genId(hotels: IHotel[]): number {
    return hotels.length > 0 ? Math.max(...hotels.map(hotel => hotel.id)) + 1 : 1;
  }

}
