import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of new York Cnt. Prk.',
      'http://raredelights.com/wp-content/uploads/2014/09/Luxurious-Apartment-In-New-York-City-USA-Interior-Design.jpg',
      1000
    ),
    new Place(
      'p2',
      'Jardin de Toulries',
      'Ces\'t le mellior location avec Paris!',
      'https://i.pinimg.com/originals/0a/8c/61/0a8c6152a1e43b5d9ec6265c8a8edc4d.jpg',
      2000
    ),
    new Place(
      'p3',
      'San Fran',
      'They are Trendy with Wendy',
      'https://www.2140taylorapts.com/wp-content/uploads/sites/47/2014/11/2140-Taylor-3.jpg',
      2000
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }

  getPlace(id: String) {
    return {...this._places.find(p => p.id === id)};
  }
}
